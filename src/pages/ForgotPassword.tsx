
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, KeyRound } from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword, resetPassword } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu e-mail ou CNPJ.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      await forgotPassword(email);
      
      toast({
        title: "E-mail enviado",
        description: "Enviamos um link de recuperação para seu e-mail.",
      });
      
      // Move to step 2 - Reset password with token
      setStep(2);
    } catch (error) {
      console.error("Forgot password error:", error);
      toast({
        title: "Erro ao enviar e-mail",
        description: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token || !password || !confirmPassword) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Senhas não conferem",
        description: "As senhas digitadas não são iguais.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      await resetPassword(token, password);
      
      toast({
        title: "Senha redefinida",
        description: "Sua senha foi redefinida com sucesso!",
      });
      
      // Navigate to login
      navigate("/login");
    } catch (error) {
      console.error("Reset password error:", error);
      toast({
        title: "Erro ao redefinir senha",
        description: "Ocorreu um erro ao redefinir sua senha. Por favor, verifique o código e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="container max-w-md mx-auto py-8">
        <Button variant="ghost" onClick={() => navigate("/login")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o login
        </Button>
        
        <GlassCard className="p-6">
          <div className="flex justify-center mb-6">
            <KeyRound className="h-12 w-12 text-agro-500" />
          </div>
          
          <h1 className="text-2xl font-bold mb-6 text-center">
            {step === 1 ? "Recuperar Senha" : "Redefinir Senha"}
          </h1>
          
          {step === 1 ? (
            <form onSubmit={handleSubmitEmail}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail ou CNPJ</Label>
                  <Input
                    id="email"
                    placeholder="exemplo@empresa.com ou 00.000.000/0000-00"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <p className="text-sm text-gray-500">
                  Enviaremos um link para você recuperar sua senha.
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar link de recuperação"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="token">Código de Recuperação</Label>
                  <Input
                    id="token"
                    placeholder="Digite o código recebido por e-mail"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Nova Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6"
                disabled={loading}
              >
                {loading ? "Processando..." : "Redefinir Senha"}
                {!loading && <CheckCircle2 className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          )}
        </GlassCard>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
