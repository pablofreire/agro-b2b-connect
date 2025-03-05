
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/ui/page-transition";
import { Building2, Search, Plus, Filter } from "lucide-react";

// Mock data for companies
const mockCompanies = [
  {
    id: "1",
    name: "Agro Tech Solutions",
    type: "Indústria",
    location: "São Paulo, SP",
    verified: true,
    rating: 4.5
  },
  {
    id: "2",
    name: "Fazenda Bom Futuro",
    type: "Produtor Rural",
    location: "Goiânia, GO",
    verified: true,
    rating: 4.8
  },
  {
    id: "3",
    name: "Sementes e Insumos Ltda",
    type: "Distribuidor",
    location: "Campo Grande, MS",
    verified: false,
    rating: 3.9
  },
  {
    id: "4",
    name: "Maquinaria Agrícola S.A.",
    type: "Fabricante",
    location: "Porto Alegre, RS",
    verified: true,
    rating: 4.2
  },
  {
    id: "5",
    name: "Cooperativa Agro Sul",
    type: "Cooperativa",
    location: "Curitiba, PR",
    verified: true,
    rating: 4.7
  }
];

const CompaniesIndex = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredCompanies = mockCompanies.filter(
    company => company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Layout showSidebar userRole="company">
      <PageTransition>
        <div className="container py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Empresas</h1>
              <p className="text-muted-foreground">
                Encontre e conecte-se com empresas do setor agro
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nova Empresa
            </Button>
          </div>
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar empresas..."
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
            {filteredCompanies.map((company) => (
              <Link to={`/companies/${company.id}`} key={company.id}>
                <Card className="transition-all hover:shadow-md h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 text-xl">
                          {company.name}
                          {company.verified && (
                            <span className="text-green-500" title="Empresa verificada">✓</span>
                          )}
                        </CardTitle>
                        <CardDescription>{company.type}</CardDescription>
                      </div>
                      <div className="bg-agro-100 p-2 rounded-full">
                        <Building2 className="h-5 w-5 text-agro-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {company.location}
                      </div>
                      <Badge variant="secondary">
                        ★ {company.rating.toFixed(1)}
                      </Badge>
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

export default CompaniesIndex;
