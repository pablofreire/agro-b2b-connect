import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import { PageTransition } from "@/components/ui/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Database, Settings, Users, Clock, Shield, FileText, DollarSign } from "lucide-react";

const AdminIndex = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  return (
    <Layout>
      <PageTransition>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Área Administrativa</h1>
            <p className="text-muted-foreground">
              Gerencie o sistema e monitore as operações
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Database className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Informações</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Configure os campos dinâmicos do sistema
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Settings className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Módulos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Configure e gerencie os módulos do sistema
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Assinaturas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gerencie planos, preços e assinantes
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Compliance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Valide documentos e qualifique empresas
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>
          </div>

          <Tabs defaultValue="notifications" className="mt-8">
            <TabsList>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="approvals">Aprovações Pendentes</TabsTrigger>
              <TabsTrigger value="activities">Atividades</TabsTrigger>
            </TabsList>
            
            <TabsContent value="notifications">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Notificações do Sistema</h3>
                <p className="text-muted-foreground">Não há notificações importantes no momento.</p>
              </Card>
            </TabsContent>
            
            <TabsContent value="approvals">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Aprovações Pendentes</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Validação de Documento</p>
                      <p className="text-sm text-muted-foreground">Empresa: Agro Solutions Ltda</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Visualizar</Button>
                      <Button size="sm">Aprovar</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Cadastro de Negociável</p>
                      <p className="text-sm text-muted-foreground">Empresa: Cooperativa Rural</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Visualizar</Button>
                      <Button size="sm">Aprovar</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="activities">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Atividades Recentes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Novo usuário registrado</p>
                      <p className="text-sm text-muted-foreground">Agrícola Viver Bem - 2 horas atrás</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Plano atualizado</p>
                      <p className="text-sm text-muted-foreground">Verde Campo S/A - 5 horas atrás</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default AdminIndex;
