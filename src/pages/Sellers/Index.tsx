
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/ui/page-transition";
import { Store, Search, Filter, Tag } from "lucide-react";

// Mock data for sellers
const mockSellers = [
  {
    id: "1",
    name: "Insumos Agrícolas Brasil",
    type: "Distribuidor",
    location: "Uberlândia, MG",
    productsCount: 78,
    rating: 4.7,
    badges: ["Premium", "Verificado"]
  },
  {
    id: "2",
    name: "Maquinários & Tratores Ltda",
    type: "Fabricante",
    location: "Londrina, PR",
    productsCount: 45,
    rating: 4.5,
    badges: ["Verificado"]
  },
  {
    id: "3",
    name: "Sementes Qualidade Total",
    type: "Produtor",
    location: "Barreiras, BA",
    productsCount: 124,
    rating: 4.8,
    badges: ["Premium"]
  },
  {
    id: "4",
    name: "Agro Implementos S.A.",
    type: "Fabricante",
    location: "Rondonópolis, MT",
    productsCount: 56,
    rating: 4.1,
    badges: []
  },
  {
    id: "5",
    name: "Cooperativa Rural Centro-Oeste",
    type: "Cooperativa",
    location: "Dourados, MS",
    productsCount: 87,
    rating: 4.6,
    badges: ["Verificado"]
  }
];

const SellersIndex = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredSellers = mockSellers.filter(
    seller => seller.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Layout showSidebar userRole="buyer">
      <PageTransition>
        <div className="container py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Fornecedores</h1>
              <p className="text-muted-foreground">
                Encontre fornecedores para seus negócios
              </p>
            </div>
            <Button>
              <Tag className="mr-2 h-4 w-4" /> Criar Cotação
            </Button>
          </div>
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar fornecedores..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filtros
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSellers.map((seller) => (
              <Link to={`/sellers/${seller.id}`} key={seller.id}>
                <Card className="transition-all hover:shadow-md h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{seller.name}</CardTitle>
                        <CardDescription>{seller.type}</CardDescription>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <Store className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <div className="text-sm text-muted-foreground">
                        {seller.location}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          {seller.productsCount} produtos
                        </span>
                        <Badge>
                          ★ {seller.rating.toFixed(1)}
                        </Badge>
                      </div>
                      {seller.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {seller.badges.map((badge, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}
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

export default SellersIndex;
