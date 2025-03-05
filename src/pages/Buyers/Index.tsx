
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/ui/page-transition";
import { ShoppingCart, Search, Filter, ArrowUpDown } from "lucide-react";

// Mock data for buyers
const mockBuyers = [
  {
    id: "1",
    name: "Fazenda Santa Luzia",
    type: "Produtor Rural",
    location: "Ribeirão Preto, SP",
    lastPurchase: "2023-11-15",
    status: "Ativo"
  },
  {
    id: "2",
    name: "Agroindústria Vale Verde",
    type: "Processador",
    location: "Uberaba, MG",
    lastPurchase: "2023-12-01",
    status: "Ativo"
  },
  {
    id: "3",
    name: "Cooperativa Agrícola Central",
    type: "Cooperativa",
    location: "Chapecó, SC",
    lastPurchase: "2023-10-22",
    status: "Ativo"
  },
  {
    id: "4",
    name: "Distribuidora Rural Sul",
    type: "Distribuidor",
    location: "Passo Fundo, RS",
    lastPurchase: "2023-11-28",
    status: "Ativo"
  },
  {
    id: "5",
    name: "Agropecuária Horizonte",
    type: "Produtor Rural",
    location: "Rio Verde, GO",
    lastPurchase: "2023-09-15",
    status: "Inativo"
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR').format(date);
};

const BuyersIndex = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredBuyers = mockBuyers.filter(
    buyer => buyer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Layout showSidebar userRole="seller">
      <PageTransition>
        <div className="container py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Compradores</h1>
              <p className="text-muted-foreground">
                Gerencie e acompanhe compradores potenciais
              </p>
            </div>
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" /> Cotações Abertas
            </Button>
          </div>
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar compradores..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" /> Filtros
              </Button>
              <Button variant="outline" className="gap-2">
                <ArrowUpDown className="h-4 w-4" /> Ordenar
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBuyers.map((buyer) => (
              <Link to={`/buyers/${buyer.id}`} key={buyer.id}>
                <Card className="transition-all hover:shadow-md h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{buyer.name}</CardTitle>
                        <CardDescription>{buyer.type}</CardDescription>
                      </div>
                      <div className="bg-blue-100 p-2 rounded-full">
                        <ShoppingCart className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm text-muted-foreground">
                        {buyer.location}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          Última compra: {formatDate(buyer.lastPurchase)}
                        </span>
                        <Badge 
                          variant={buyer.status === "Ativo" ? "default" : "secondary"}
                        >
                          {buyer.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default BuyersIndex;
