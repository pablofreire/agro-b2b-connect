import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTransition } from "@/components/ui/page-transition";
import { BarChart4, Building2, ShoppingCart, Store, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  // Role-specific dashboard redirection with a small delay
  React.useEffect(() => {
    if (user?.role) {
      // Small delay to show the dashboard before redirecting
      const timeout = setTimeout(() => {
        switch(user.role) {
          case "admin":
            navigate("/admin");
            break;
          case "company":
            navigate("/company");
            break;
          case "buyer":
            navigate("/buyer");
            break;
          case "seller":
            navigate("/seller");
            break;
          default:
            // Stay on this page
            break;
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [user, navigate]);

  return (
    <Layout>
      <PageTransition>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Bem-vindo ao AgroB2B Connect</h1>
            <p className="text-muted-foreground">
              Você está sendo redirecionado para sua área principal...
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Building2 className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Área da Empresa</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gerencie seu perfil, filiais e negociáveis
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
                onClick={() => navigate("/company")}
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <ShoppingCart className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Área do Comprador</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Crie cotações e gerencie suas compras
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
                onClick={() => navigate("/buyer")}
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Store className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Área do Vendedor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Responda cotações e gerencie suas vendas
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
                onClick={() => navigate("/seller")}
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <BarChart4 className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Relatórios</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Acompanhe métricas e resultados
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
                disabled
              >
                Em breve
              </Button>
            </GlassCard>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="activity">Atividades Recentes</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Visão Geral da Conta</h3>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium">Usuário</p>
                    <p>{user?.name || "Usuário"}</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium">Empresa</p>
                    <p>{user?.company?.name || "Empresa"}</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium">Tipo de Conta</p>
                    <p className="capitalize">{user?.role || "Usuário"}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Atividades Recentes</h3>
                <p className="text-muted-foreground">Não há atividades recentes para exibir.</p>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Notificações</h3>
                <p className="text-muted-foreground">Não há notificações para exibir.</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Dashboard;
