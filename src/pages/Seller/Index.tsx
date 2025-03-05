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
  ClipboardList, FileText, ShoppingCart, ShieldAlert,
  Clock, CheckCircle, AlertTriangle, Bell, ChevronRight
} from "lucide-react";

const SellerIndex = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  return (
    <Layout>
      <PageTransition>
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Área do Vendedor</h1>
            <p className="text-muted-foreground">
              Responda cotações e gerencie suas vendas com eficiência
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <GlassCard className="p-6 flex flex-col items-center text-center">
              <ClipboardList className="h-12 w-12 text-agro-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Cotações</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize e responda cotações compatíveis
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
                Acompanhe e gerencie suas negociações
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
                Visualize e gerencie suas ordens de venda
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
                Resolva problemas com suas vendas
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
                <h3 className="text-lg font-medium">Cotações Compatíveis</h3>
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-agro-500 mr-2" />
                  <span className="bg-agro-500 text-white text-xs rounded-full px-2 py-1">3 novas</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Fazenda Boa Vista</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-full">
                      12h restantes
                    </span>
                  </div>
                  <h4 className="font-medium mb-1">Sementes de Milho Híbrido</h4>
                  <p className="text-sm text-muted-foreground mb-3">20 unidades • Entrega em até 15 dias</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Compatibilidade: <span className="font-medium text-green-600">Alta</span></p>
                    </div>
                    <Button size="sm">Responder</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Cooperativa Agrícola Central</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-full">
                      2 dias restantes
                    </span>
                  </div>
                  <h4 className="font-medium mb-1">Fertilizantes Orgânicos</h4>
                  <p className="text-sm text-muted-foreground mb-3">500kg • Entrega em até 7 dias</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Compatibilidade: <span className="font-medium text-yellow-600">Média</span></p>
                    </div>
                    <Button size="sm">Responder</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Fazendas Unidas S.A.</span>
                    <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded-full">
                      Urgente
                    </span>
                  </div>
                  <h4 className="font-medium mb-1">Defensivos Agrícolas</h4>
                  <p className="text-sm text-muted-foreground mb-3">10 unidades • Entrega imediata</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Compatibilidade: <span className="font-medium text-green-600">Alta</span></p>
                    </div>
                    <Button size="sm">Responder</Button>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Ver Todas as Cotações Compatíveis
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Ordens em Andamento</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Aguardando Pagamento</p>
                    <p className="text-sm text-muted-foreground">Ordem #1423 - Sementes de Soja</p>
                    <p className="text-xs text-muted-foreground">Cliente: Fazenda Boa Esperança</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Pagamento Confirmado</p>
                    <p className="text-sm text-muted-foreground">Ordem #1420 - Implementos Agrícolas</p>
                    <p className="text-xs text-muted-foreground">Cliente: Agro Souza</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Entrega Atrasada</p>
                    <p className="text-sm text-muted-foreground">Ordem #1418 - Defensivos</p>
                    <p className="text-xs text-muted-foreground">Cliente: Fazenda Santa Luzia</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xl font-bold">4</p>
                  <p className="text-xs">Aguardando</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xl font-bold">2</p>
                  <p className="text-xs">Em Trânsito</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xl font-bold">15</p>
                  <p className="text-xs">Concluídas</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">Ver Todas as Ordens</Button>
            </Card>
          </div>
          
          <Tabs defaultValue="negotiations" className="mt-8">
            <TabsList>
              <TabsTrigger value="negotiations">Negociações</TabsTrigger>
              <TabsTrigger value="customers">Clientes</TabsTrigger>
              <TabsTrigger value="analytics">Análises</TabsTrigger>
            </TabsList>
            
            <TabsContent value="negotiations">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Negociações em Andamento</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <p className="font-medium">Fertilizantes NPK</p>
                      <p className="text-sm text-muted-foreground">Cliente: Fazenda Rio Verde • Valor: R$ 4.800,00</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs rounded-full">
                        Aguardando resposta
                      </div>
                      <Button size="sm" variant="ghost">Ver</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <p className="font-medium">Sementes de Trigo</p>
                      <p className="text-sm text-muted-foreground">Cliente: Agro Souza • Valor: R$ 1.250,00</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full">
                        Proposta aceita
                      </div>
                      <Button size="sm" variant="ghost">Ver</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <p className="font-medium">Equipamento de Irrigação</p>
                      <p className="text-sm text-muted-foreground">Cliente: Cooperativa Central • Valor: R$ 8.500,00</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full">
                        Contraproposta
                      </div>
                      <Button size="sm" variant="ghost">Ver</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">Ver Todas as Negociações</Button>
              </Card>
            </TabsContent>
            
            <TabsContent value="customers">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Principais Clientes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold">FB</span>
                      </div>
                      <div>
                        <p className="font-medium">Fazenda Boa Vista</p>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span key={star} className="text-yellow-400">★</span>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">12 compras</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Perfil</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold">CA</span>
                      </div>
                      <div>
                        <p className="font-medium">Cooperativa Agrícola</p>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <span key={star} className="text-yellow-400">★</span>
                            ))}
                            <span className="text-gray-300">★</span>
                          </div>
                          <span className="text-xs text-muted-foreground">8 compras</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Perfil</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold">AS</span>
                      </div>
                      <div>
                        <p className="font-medium">Agro Souza</p>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span key={star} className="text-yellow-400">★</span>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">6 compras</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Perfil</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Desempenho de Vendas</h3>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-3xl font-bold">85%</p>
                    <p className="text-sm">Taxa de Conversão</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-sm">Vendas no Mês</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-3xl font-bold">R$ 12.5k</p>
                    <p className="text-sm">Faturamento</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="font-medium mb-2">Produtos Mais Vendidos</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p>Sementes de Soja</p>
                      <p className="font-medium">32%</p>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-agro-500 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p>Fertilizantes</p>
                      <p className="font-medium">28%</p>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-agro-500 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p>Defensivos</p>
                      <p className="font-medium">21%</p>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-agro-500 rounded-full" style={{ width: '21%' }}></div>
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

export default SellerIndex;
