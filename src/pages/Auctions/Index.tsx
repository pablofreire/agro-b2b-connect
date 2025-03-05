
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/ui/page-transition";
import { Gavel, Search, Filter, Clock, ArrowUpDown, CalendarDays } from "lucide-react";

// Mock data for auctions
const mockAuctions = [
  {
    id: "1",
    title: "Lote de Tratores Agrícolas",
    seller: "Maquinários & Tratores Ltda",
    category: "Maquinário",
    startPrice: 250000,
    currentBid: 278500,
    bidsCount: 12,
    endDate: "2023-12-15T18:00:00",
    status: "active"
  },
  {
    id: "2",
    title: "Sementes de Soja Premium - 5 Toneladas",
    seller: "Sementes Qualidade Total",
    category: "Insumos",
    startPrice: 75000,
    currentBid: 82600,
    bidsCount: 8,
    endDate: "2023-12-10T15:30:00",
    status: "active"
  },
  {
    id: "3",
    title: "Implementos Agrícolas - Lote Completo",
    seller: "Agro Implementos S.A.",
    category: "Implementos",
    startPrice: 120000,
    currentBid: 145000,
    bidsCount: 18,
    endDate: "2023-12-05T14:00:00",
    status: "ending_soon"
  },
  {
    id: "4",
    title: "Insumos Agrícolas - Fertilizantes",
    seller: "Insumos Agrícolas Brasil",
    category: "Insumos",
    startPrice: 45000,
    currentBid: 51200,
    bidsCount: 9,
    endDate: "2023-12-20T16:00:00",
    status: "active"
  },
  {
    id: "5",
    title: "Colheitadeira John Deere Modelo 2020",
    seller: "Maquinários & Tratores Ltda",
    category: "Maquinário",
    startPrice: 380000,
    currentBid: 396000,
    bidsCount: 5,
    endDate: "2023-12-01T17:00:00",
    status: "ending_soon"
  }
];

// Format currency in BRL
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  }).format(value);
};

// Calculate time remaining
const getTimeRemaining = (endDateStr: string) => {
  const now = new Date();
  const endDate = new Date(endDateStr);
  const diff = endDate.getTime() - now.getTime();
  
  if (diff <= 0) return "Encerrado";
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) return `${days}d ${hours}h restantes`;
  
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  if (hours > 0) return `${hours}h ${minutes}m restantes`;
  
  return `${minutes}m restantes`;
};

const AuctionsIndex = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredAuctions = mockAuctions.filter(
    auction => auction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Layout showSidebar userRole="buyer">
      <PageTransition>
        <div className="container py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Leilões</h1>
              <p className="text-muted-foreground">
                Participe de leilões e garanta as melhores ofertas
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <CalendarDays className="mr-2 h-4 w-4" /> Agenda de Leilões
              </Button>
              <Button>
                <Gavel className="mr-2 h-4 w-4" /> Leilões Ativos
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar leilões..."
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
          
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredAuctions.map((auction) => (
              <Link to={`/auctions/${auction.id}`} key={auction.id}>
                <Card className="transition-all hover:shadow-md h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={auction.status === "ending_soon" ? "destructive" : "default"}
                          >
                            {auction.status === "ending_soon" ? "Finalizando" : "Ativo"}
                          </Badge>
                          <CardDescription>{auction.category}</CardDescription>
                        </div>
                        <CardTitle className="mt-2 text-xl">{auction.title}</CardTitle>
                        <CardDescription className="mt-1">Vendedor: {auction.seller}</CardDescription>
                      </div>
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Gavel className="h-5 w-5 text-amber-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Lance Inicial</p>
                        <p className="font-medium">{formatCurrency(auction.startPrice)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Lance Atual</p>
                        <p className="font-medium text-agro-600">{formatCurrency(auction.currentBid)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total de Lances</p>
                        <p className="font-medium">{auction.bidsCount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tempo Restante</p>
                        <p className="font-medium flex items-center gap-1">
                          <Clock className="h-4 w-4" /> 
                          {getTimeRemaining(auction.endDate)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Dar Lance</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default AuctionsIndex;
