import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import { PageTransition } from "@/components/ui/page-transition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Building2, Users, PackageOpen, Wallet, 
  AlertCircle, FileText, Clock, CheckCircle, Shield
} from "lucide-react";

const CompanyIndex = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  return (
    <Layout>
      <PageTransition>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Área da Empresa</h1>
            <p className="text-muted-foreground">
              Gerencie seu perfil, filiais e recursos da empresa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Building2 className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Empresa</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gerencie perfil e filiais
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <PackageOpen className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Negociáveis</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Catálogos e inventário de produtos
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Wallet className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Financeiro</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pagamentos, recebimentos e contas
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Network</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gerencie colaboradores e convites
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Alertas</h3>
                <AlertCircle className="h-5 w-5 text-orange-500" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Documentos Pendentes</p>
                    <p className="text-sm text-muted-foreground">2 documentos aguardando envio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Assinatura</p>
                    <p className="text-sm text-muted-foreground">Vence em 7 dias</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Compliance</h3>
                <Shield className="h-5 w-5 text-agro-500" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Status</p>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                      <p className="text-sm">Verificação Parcial</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Ver Detalhes</Button>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Documentos</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
                      <p>3</p>
                      <p>Validados</p>
                    </div>
                    <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded">
                      <p>2</p>
                      <p>Pendentes</p>
                    </div>
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded">
                      <p>0</p>
                      <p>Rejeitados</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Negociações</h3>
                <FileText className="h-5 w-5 text-agro-500" />
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-muted p-3 rounded">
                    <p className="text-2xl font-medium">3</p>
                    <p className="text-sm">Em Andamento</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="text-2xl font-medium">12</p>
                    <p className="text-sm">Finalizadas</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Ver todas</Button>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="activities" className="mt-8">
            <TabsList>
              <TabsTrigger value="activities">Atividades Recentes</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activities">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Atividades Recentes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Cotação respondida</p>
                      <p className="text-sm text-muted-foreground">Fertilizantes - Ontem às 15:30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Pagamento recebido</p>
                      <p className="text-sm text-muted-foreground">Ordem #4728 - 2 dias atrás</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Documento enviado</p>
                      <p className="text-sm text-muted-foreground">Certificado de Qualidade - 3 dias atrás</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="network">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Sua Rede</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Colaboradores</p>
                      <p className="text-2xl font-medium">6</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Convites Pendentes</p>
                      <p className="text-2xl font-medium">2</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Parceiros</p>
                      <p className="text-2xl font-medium">4</p>
                    </div>
                  </div>
                  <Button>Gerenciar Convites</Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Notificações</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-b pb-4">
                    <AlertCircle className="h-5 w-5 text-agro-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Nova cotação compatível</p>
                      <p className="text-sm text-muted-foreground">Sua empresa atende aos requisitos para uma nova cotação</p>
                      <p className="text-xs text-muted-foreground">Hoje, 09:45</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 border-b pb-4">
                    <AlertCircle className="h-5 w-5 text-agro-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Atualização de sistema</p>
                      <p className="text-sm text-muted-foreground">Novos recursos disponíveis na área do vendedor</p>
                      <p className="text-xs text-muted-foreground">Ontem, 14:20</p>
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

export default CompanyIndex;
