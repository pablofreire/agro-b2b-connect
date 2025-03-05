
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
  FileText, PackageSearch, ShoppingCart, ShieldAlert,
  PlusCircle, Clock, CheckCircle, AlertTriangle
} from "lucide-react";

const BuyerIndex = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <Layout>
      <PageTransition>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Área do Comprador</h1>
            <p className="text-muted-foreground">
              Crie cotações e gerencie suas compras com facilidade
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <PackageSearch className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Cotações</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Crie e gerencie solicitações de cotação
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <FileText className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Negociações</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Acompanhe e finalize suas negociações
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <ShoppingCart className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Ordens de Compra</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize e gerencie suas ordens de compra
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>

            <GlassCard className="p-6 flex flex-col items-center text-center">
              <ShieldAlert className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Disputas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Resolva problemas com suas compras
              </p>
              <Button 
                className="mt-auto" 
                variant="outline"
              >
                Acessar
              </Button>
            </GlassCard>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Cotações Recentes</h3>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <PlusCircle className="h-4 w-4" />
                  <span>Nova Cotação</span>
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-medium">Fertilizantes Organicos</p>
                    <p className="text-sm text-muted-foreground">3 itens • 2 respostas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs rounded-full">
                      Em Andamento
                    </div>
                    <Button size="sm" variant="ghost">Ver</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-medium">Maquinário Agrícola</p>
                    <p className="text-sm text-muted-foreground">1 item • 5 respostas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs rounded-full">
                      Em Andamento
                    </div>
                    <Button size="sm" variant="ghost">Ver</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-medium">Sementes de Milho</p>
                    <p className="text-sm text-muted-foreground">2 itens • 4 respostas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full">
                      Finalizada
                    </div>
                    <Button size="sm" variant="ghost">Ver</Button>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">Ver Todas as Cotações</Button>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Ordens de Compra</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-sm">Em Andamento</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-3xl font-bold">8</p>
                  <p className="text-sm">Concluídas</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Aguardando Entrega</p>
                    <p className="text-sm text-muted-foreground">Ordem #8542 - Defensivos Agrícolas</p>
                    <p className="text-xs text-muted-foreground">Previsão: 23/06/2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Pagamento Pendente</p>
                    <p className="text-sm text-muted-foreground">Ordem #8539 - Ferramentas</p>
                    <p className="text-xs text-muted-foreground">Vence em 2 dias</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Entrega Concluída</p>
                    <p className="text-sm text-muted-foreground">Ordem #8530 - Sementes</p>
                    <p className="text-xs text-muted-foreground">Finalizada ontem</p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">Ver Todas as Ordens</Button>
            </Card>
          </div>
          
          <Tabs defaultValue="offers" className="mt-8">
            <TabsList>
              <TabsTrigger value="offers">Ofertas</TabsTrigger>
              <TabsTrigger value="suppliers">Fornecedores</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
            </TabsList>
            
            <TabsContent value="offers">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Ofertas em Destaque</h3>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Agro Insumos Ltda</span>
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                        -15%
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">Adubo Orgânico Premium</h4>
                    <p className="text-sm text-muted-foreground mb-3">Pacote de 20kg - Pronto uso</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">R$ 89,90</p>
                      <Button size="sm" variant="outline">Ver Oferta</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Maquinas Agrícolas SA</span>
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">Pulverizador Costal 20L</h4>
                    <p className="text-sm text-muted-foreground mb-3">Com bomba de pressão</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">R$ 349,00</p>
                      <Button size="sm" variant="outline">Ver Oferta</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Sementes do Vale</span>
                      <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                        Novo
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">Kit Sementes Hortaliças</h4>
                    <p className="text-sm text-muted-foreground mb-3">10 variedades - Alta germinação</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">R$ 124,50</p>
                      <Button size="sm" variant="outline">Ver Oferta</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6">Ver Todas as Ofertas</Button>
              </Card>
            </TabsContent>
            
            <TabsContent value="suppliers">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Fornecedores Frequentes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold">AS</span>
                      </div>
                      <div>
                        <p className="font-medium">Agro Supplies</p>
                        <p className="text-sm text-muted-foreground">Insumos e Defensivos</p>
                      </div>
                    </div>
                    <Button size="sm">Criar Cotação</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold">CV</span>
                      </div>
                      <div>
                        <p className="font-medium">Cooperativa Verde</p>
                        <p className="text-sm text-muted-foreground">Sementes e Mudas</p>
                      </div>
                    </div>
                    <Button size="sm">Criar Cotação</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold">MA</span>
                      </div>
                      <div>
                        <p className="font-medium">Máquinas Agrícolas SA</p>
                        <p className="text-sm text-muted-foreground">Equipamentos e Maquinário</p>
                      </div>
                    </div>
                    <Button size="sm">Criar Cotação</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Histórico de Compras</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Junho 2023</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium">Sementes de Soja</p>
                          <p className="text-sm text-muted-foreground">Fornecedor: Sementes do Vale</p>
                        </div>
                        <p className="font-bold">R$ 2.450,00</p>
                      </div>
                      
                      <div className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium">Fertilizante NPK</p>
                          <p className="text-sm text-muted-foreground">Fornecedor: Agro Insumos</p>
                        </div>
                        <p className="font-bold">R$ 1.890,00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Maio 2023</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium">Trator Compacto</p>
                          <p className="text-sm text-muted-foreground">Fornecedor: Máquinas Agrícolas</p>
                        </div>
                        <p className="font-bold">R$ 45.000,00</p>
                      </div>
                      
                      <div className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium">Defensivos</p>
                          <p className="text-sm text-muted-foreground">Fornecedor: Agro Supplies</p>
                        </div>
                        <p className="font-bold">R$ 3.250,00</p>
                      </div>
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

export default BuyerIndex;
