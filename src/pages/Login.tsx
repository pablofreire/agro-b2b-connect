
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { GlassCard } from "@/components/ui/glass-card";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Erro ao fazer login",
        description: "Por favor, preencha todos os campos",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password);
      toast({
        title: "Login realizado com sucesso!",
        description: "Você será redirecionado para o dashboard"
      });
      
      // Redirect based on email or test credentials
      if (email === "teste") {
        navigate("/company");
      } else if (email.includes("admin")) {
        navigate("/admin");
      } else if (email.includes("buyer")) {
        navigate("/buyer");
      } else if (email.includes("seller")) {
        navigate("/seller");
      } else {
        navigate("/company");
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-12">
        <div className="w-full max-w-md animate-slide-in">
          <div className="text-center mb-8">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
              <span className="bg-agro-500 text-white p-2 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17.9999L3 13.9999M3 13.9999L7 9.99994M3 13.9999H16M16 5.99994H19C20.1046 5.99994 21 6.89537 21 7.99994V17.9999C21 19.1045 20.1046 19.9999 19 19.9999H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-semibold text-xl tracking-tight">AgroB2B</span>
            </Link>
            <h1 className="text-3xl font-bold">Bem-vindo de volta</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Entre com seus dados para acessar sua conta
            </p>
          </div>

          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Usuário/E-mail</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Digite seu usuário ou email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link to="/forgot-password" className="text-sm text-agro-600 hover:text-agro-700 dark:text-agro-400 dark:hover:text-agro-300">
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lembrar-me
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
              
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                Não tem uma conta?{" "}
                <Link to="/register" className="text-agro-600 hover:text-agro-700 dark:text-agro-400 dark:hover:text-agro-300 font-medium">
                  Registre-se
                </Link>
              </p>
            </form>
          </GlassCard>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Para demonstração, use:<br />
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                usuário: teste / senha: 123
              </code>
              <br />ou<br />
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                admin@email.com / buyer@email.com / seller@email.com / company@email.com
              </code>
              <br />com qualquer senha
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
