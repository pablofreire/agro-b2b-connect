
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Briefcase, Users, ShoppingCart, Shield, BarChart, Settings } from "lucide-react";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-blur-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".initial-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Gestão de Negociáveis",
      description: "Organize seus produtos e serviços em catálogos personalizados. Controle estoque e movimentações."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Network de Negócios",
      description: "Expanda sua rede de contatos no agronegócio e forme parcerias estratégicas."
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Sistema de Cotações",
      description: "Crie e gerencie cotações para produtos e serviços. Compare propostas de diversos fornecedores."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance",
      description: "Garanta que todas as negociações cumpram requisitos legais e regulatórios do setor agrícola."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Relatórios Avançados",
      description: "Visualize dados e métricas de desempenho em tempo real. Tome decisões baseadas em dados."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Configurações Flexíveis",
      description: "Adapte o sistema às suas necessidades, com opções de personalização para cada tipo de empresa."
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 199",
      description: "Para pequenas empresas e produtores iniciantes",
      features: [
        "Até 2 usuários",
        "Catálogo com 100 produtos",
        "Cotações ilimitadas",
        "Suporte por e-mail"
      ],
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 499",
      description: "Para empresas em crescimento no agronegócio",
      features: [
        "Até 10 usuários",
        "Catálogo com 1000 produtos",
        "Cotações e negociações ilimitadas",
        "Gestão de inventário",
        "Suporte prioritário",
        "API para integração"
      ],
      highlighted: true
    },
    {
      name: "Empresarial",
      price: "R$ 999",
      description: "Para grandes empresas com múltiplas unidades",
      features: [
        "Usuários ilimitados",
        "Catálogo ilimitado",
        "Recursos completos",
        "Dashboards personalizados",
        "Suporte 24/7",
        "Onboarding dedicado"
      ],
      highlighted: false
    }
  ];

  return (
    <Layout showFooter={true} fullWidth={true}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Conectando</span> o Agronegócio Brasileiro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-in">
              Plataforma B2B completa para compra, venda e gestão de produtos e serviços agrícolas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in">
              <Button size="lg" className="px-8 py-6 text-base">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-base" onClick={scrollToFeatures}>
                Conheça os Recursos
              </Button>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden animate-blur-in shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-agro-500/20 to-earth-500/20 mix-blend-multiply"></div>
              {/* Platform screen mockup goes here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card w-full max-w-5xl h-[90%] border rounded-xl shadow-xl overflow-hidden">
                  <div className="h-12 bg-gray-100 dark:bg-gray-800 border-b flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto">
                      <div className="px-4 py-1 bg-white dark:bg-gray-700 rounded-full text-xs">
                        AgroB2B Connect
                      </div>
                    </div>
                  </div>
                  <div className="h-[calc(100%-3rem)] bg-gray-50 dark:bg-gray-900 p-4">
                    <div className="h-full rounded flex">
                      {/* Sidebar */}
                      <div className="hidden md:block w-48 bg-white dark:bg-gray-800 rounded-l-lg border-r">
                        <div className="p-4 border-b">
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                        </div>
                        <div className="p-4">
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-3/4"></div>
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-full"></div>
                          <div className="h-6 bg-agro-200 dark:bg-agro-700 rounded-md mb-3 w-5/6"></div>
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-4/5"></div>
                          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-3/4"></div>
                        </div>
                      </div>
                      
                      {/* Main content */}
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-r-lg p-4">
                        <div className="mb-6">
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-1/3"></div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="h-24 bg-agro-100 dark:bg-agro-900 rounded-md"></div>
                            <div className="h-24 bg-earth-100 dark:bg-earth-900 rounded-md"></div>
                            <div className="h-24 bg-blue-100 dark:bg-blue-900 rounded-md"></div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-1/4"></div>
                          <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                        </div>
                        
                        <div>
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-1/5"></div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                            <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-agro-100 dark:bg-agro-900 text-agro-600 dark:text-agro-300 rounded-full text-sm font-medium mb-4 inline-block">
              Recursos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo que você precisa para seu negócio crescer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nossa plataforma oferece uma experiência completa para todos os participantes da cadeia do agronegócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <GlassCard 
                key={index}
                className="p-6 initial-hidden opacity-0"
                hoverEffect={true}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-full bg-agro-100 dark:bg-agro-900 text-agro-600 dark:text-agro-300 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-earth-100 dark:bg-earth-900 text-earth-600 dark:text-earth-300 rounded-full text-sm font-medium mb-4 inline-block">
              Para Quem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluções para todo o ecossistema do agronegócio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nossa plataforma atende às necessidades específicas de cada participante da cadeia do agronegócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-8 initial-hidden opacity-0">
              <h3 className="text-xl font-bold mb-4">Para Compradores</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Acesso a uma ampla rede de fornecedores qualificados</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Compare cotações e encontre as melhores ofertas</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Gerencie todas as negociações em um só lugar</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Acompanhe pedidos e entregas em tempo real</span>
                </li>
              </ul>
            </GlassCard>
            
            <GlassCard className="p-8 initial-hidden opacity-0">
              <h3 className="text-xl font-bold mb-4">Para Vendedores</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Amplie seu alcance para novos mercados e clientes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Receba alertas de cotações compatíveis com seus produtos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Gerenciamento simplificado de catálogo de produtos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Rastreamento completo de vendas e recebimentos</span>
                </li>
              </ul>
            </GlassCard>
            
            <GlassCard className="p-8 initial-hidden opacity-0">
              <h3 className="text-xl font-bold mb-4">Para Cooperativas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Integração completa dos cooperados na plataforma</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Ferramentas para treinamentos e eventos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Publicação de conteúdos exclusivos para membros</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Gestão centralizada com múltiplas filiais</span>
                </li>
              </ul>
            </GlassCard>
            
            <GlassCard className="p-8 initial-hidden opacity-0">
              <h3 className="text-xl font-bold mb-4">Para Prestadores de Serviços</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Divulgue serviços para um público altamente direcionado</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Compartilhe artigos técnicos e estudos de caso</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Promova eventos e treinamentos especializados</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Conecte-se com potenciais clientes do setor</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-agro-100 dark:bg-agro-900 text-agro-600 dark:text-agro-300 rounded-full text-sm font-medium mb-4 inline-block">
              Planos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha o plano ideal para seu negócio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Oferecemos planos flexíveis para empresas de todos os tamanhos, desde pequenos produtores até grandes cooperativas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative rounded-xl overflow-hidden initial-hidden opacity-0",
                  plan.highlighted ? "transform md:-translate-y-4" : ""
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-agro-500 text-white py-1 text-center text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <GlassCard 
                  className={cn(
                    "p-8 h-full flex flex-col",
                    plan.highlighted 
                      ? "border-2 border-agro-500 dark:border-agro-400" 
                      : "border border-gray-200 dark:border-gray-700"
                  )}
                  variant={plan.highlighted ? "accent" : "default"}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">/mês</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="flex-1">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-agro-500 mr-3 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={cn("w-full", 
                      !plan.highlighted && "bg-white text-agro-600 border border-agro-500 hover:bg-agro-50"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Selecionar Plano
                  </Button>
                </GlassCard>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Precisa de um plano personalizado para sua organização?
            </p>
            <Link to="/contact">
              <Button variant="outline">Fale com nosso time comercial</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio no agro?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já estão revolucionando suas operações com o AgroB2B Connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Começar Gratuitamente
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Agendar uma Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
