
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Step 1 form state
  const [formData, setFormData] = useState({
    cnpj: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  // Step 2 form state
  const [companyData, setCompanyData] = useState({
    companyName: "",
    businessName: "",
    location: "",
    responsibleName: "",
    businessArea: "",
    businessType: "company", // company, cooperative, provider
    actions: {
      buy: false,
      sell: false,
      articles: false,
      distribute: false,
      courses: false,
      events: false,
      logistics: false,
      education: false,
      research: false,
      technology: false,
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean, name: string) => {
    if (name === "acceptTerms") {
      setFormData(prev => ({ ...prev, acceptTerms: checked }));
    } else {
      setCompanyData(prev => ({
        ...prev,
        actions: {
          ...prev.actions,
          [name]: checked
        }
      }));
    }
  };

  const handleBusinessTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setCompanyData(prev => ({ ...prev, businessType: type }));
  };

  const validateStep1 = () => {
    // Basic validation
    if (!formData.cnpj || !formData.email || !formData.phone || !formData.password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Senhas não conferem",
        description: "As senhas digitadas não são iguais.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.acceptTerms) {
      toast({
        title: "Termos de uso",
        description: "Você precisa aceitar os termos de uso para continuar.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const validateStep2 = () => {
    // Basic validation for step 2
    if (!companyData.companyName || !companyData.businessName || !companyData.location) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos necessários.",
        variant: "destructive",
      });
      return false;
    }

    // Check if at least one action is selected
    const hasAction = Object.values(companyData.actions).some(value => value === true);
    if (!hasAction) {
      toast({
        title: "Ações da empresa",
        description: "Selecione pelo menos uma ação que sua empresa pode realizar.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      // Simulate sending code to email/phone
      toast({
        title: "Código enviado",
        description: "Um código de verificação foi enviado para seu e-mail e telefone.",
      });
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;
    
    setLoading(true);
    
    try {
      // Combine data from both steps
      const registerData = {
        ...formData,
        companyName: companyData.companyName,
        businessType: companyData.businessType,
      };
      
      await register(registerData);
      
      toast({
        title: "Registro concluído",
        description: "Bem-vindo ao AgroB2B Connect!",
      });
      
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Erro no registro",
        description: "Ocorreu um erro ao registrar. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate("/login");
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="container max-w-md mx-auto py-8">
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        
        <GlassCard className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {step === 1 ? "Crie sua conta" : "Informações da empresa"}
          </h1>
          
          {step === 1 ? (
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    name="cnpj"
                    placeholder="00.000.000/0000-00"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="empresa@exemplo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox 
                    id="acceptTerms" 
                    checked={formData.acceptTerms} 
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(checked as boolean, "acceptTerms")
                    } 
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Aceito os termos de uso e política de privacidade
                  </label>
                </div>
              </div>
              
              <Button 
                type="button" 
                className="w-full mt-6" 
                onClick={handleNextStep}
              >
                Próximo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Razão Social</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={companyData.companyName}
                    onChange={handleCompanyInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessName">Nome Fantasia</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={companyData.businessName}
                    onChange={handleCompanyInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input
                    id="location"
                    name="location"
                    value={companyData.location}
                    onChange={handleCompanyInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="responsibleName">Nome do Responsável</Label>
                  <Input
                    id="responsibleName"
                    name="responsibleName"
                    value={companyData.responsibleName}
                    onChange={handleCompanyInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessArea">Área de Negócio</Label>
                  <Input
                    id="businessArea"
                    name="businessArea"
                    value={companyData.businessArea}
                    onChange={handleCompanyInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessType">Tipo de Empresa</Label>
                  <select
                    id="businessType"
                    name="businessType"
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md"
                    value={companyData.businessType}
                    onChange={handleBusinessTypeChange}
                  >
                    <option value="company">Empresa/Companhia</option>
                    <option value="cooperative">Cooperativa</option>
                    <option value="provider">Prestador de Serviços</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label className="block mb-2">Ações que a empresa pode realizar:</Label>
                  
                  {companyData.businessType === 'company' && (
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="buy" 
                          checked={companyData.actions.buy} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "buy")
                          } 
                        />
                        <label htmlFor="buy" className="text-sm">Compra</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sell" 
                          checked={companyData.actions.sell} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "sell")
                          } 
                        />
                        <label htmlFor="sell" className="text-sm">Venda</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="articles" 
                          checked={companyData.actions.articles} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "articles")
                          } 
                        />
                        <label htmlFor="articles" className="text-sm">Postar artigos</label>
                      </div>
                    </div>
                  )}
                  
                  {companyData.businessType === 'cooperative' && (
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="buy" 
                          checked={companyData.actions.buy} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "buy")
                          } 
                        />
                        <label htmlFor="buy" className="text-sm">Compra</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sell" 
                          checked={companyData.actions.sell} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "sell")
                          } 
                        />
                        <label htmlFor="sell" className="text-sm">Venda</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="distribute" 
                          checked={companyData.actions.distribute} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "distribute")
                          } 
                        />
                        <label htmlFor="distribute" className="text-sm">Distribuição</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="articles" 
                          checked={companyData.actions.articles} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "articles")
                          } 
                        />
                        <label htmlFor="articles" className="text-sm">Postar artigos</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="courses" 
                          checked={companyData.actions.courses} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "courses")
                          } 
                        />
                        <label htmlFor="courses" className="text-sm">Oferecer cursos aos cooperados</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="events" 
                          checked={companyData.actions.events} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "events")
                          } 
                        />
                        <label htmlFor="events" className="text-sm">Divulgar eventos e treinamentos</label>
                      </div>
                    </div>
                  )}
                  
                  {companyData.businessType === 'provider' && (
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="logistics" 
                          checked={companyData.actions.logistics} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "logistics")
                          } 
                        />
                        <label htmlFor="logistics" className="text-sm">Logística e transporte</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="education" 
                          checked={companyData.actions.education} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "education")
                          } 
                        />
                        <label htmlFor="education" className="text-sm">Instituições de ensino</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="research" 
                          checked={companyData.actions.research} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "research")
                          } 
                        />
                        <label htmlFor="research" className="text-sm">Centros de pesquisa</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="technology" 
                          checked={companyData.actions.technology} 
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(checked as boolean, "technology")
                          } 
                        />
                        <label htmlFor="technology" className="text-sm">Empresas de tecnologia</label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6"
                disabled={loading}
              >
                {loading ? "Processando..." : "Finalizar Cadastro"}
                {!loading && <CheckCircle2 className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          )}
        </GlassCard>
      </div>
    </Layout>
  );
};

export default Register;
