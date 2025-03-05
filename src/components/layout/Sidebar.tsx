
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  ShoppingCart,
  Package,
  Settings,
  CreditCard,
  FileText,
  BarChart,
  Truck,
  Briefcase,
  Shield,
  User,
  ArrowRightLeft,
  Award,
  ChevronDown,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  userRole?: "admin" | "company" | "buyer" | "seller" | "cooperative" | "provider";
}

interface SidebarItemProps {
  icon: React.ElementType;
  href: string;
  label: string;
  active?: boolean;
  subItems?: { href: string; label: string }[];
}

const SidebarItem = ({ icon: Icon, href, label, active, subItems }: SidebarItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <div className="w-full">
      <Link
        to={hasSubItems ? "#" : href}
        onClick={hasSubItems ? () => setExpanded(!expanded) : undefined}
        className={cn(
          "flex items-center px-3 py-2 my-1 rounded-md text-sm font-medium transition-colors",
          "hover:bg-agro-100 hover:text-agro-600 dark:hover:bg-agro-900 dark:hover:text-agro-400",
          active ? "bg-agro-100 text-agro-600 dark:bg-agro-900 dark:text-agro-400" : "text-foreground/80"
        )}
      >
        <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
        <span className="flex-1">{label}</span>
        {hasSubItems && (
          <div className="ml-2">
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        )}
      </Link>
      
      {hasSubItems && expanded && (
        <div className="ml-6 mt-1 space-y-1">
          {subItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-agro-100 hover:text-agro-600 dark:hover:bg-agro-900 dark:hover:text-agro-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-agro-400 mr-3"></span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, userRole = "company" }: SidebarProps) => {
  const location = useLocation();
  
  // Admin navigation
  const adminNav = [
    { icon: Home, href: "/admin", label: "Dashboard" },
    { 
      icon: Settings, 
      href: "/admin/modules", 
      label: "Módulos",
      subItems: [
        { href: "/admin/modules/config", label: "Configuração" },
        { href: "/admin/modules/permissions", label: "Permissões" }
      ]
    },
    {
      icon: CreditCard,
      href: "/admin/subscriptions",
      label: "Assinaturas",
      subItems: [
        { href: "/admin/subscriptions/plans", label: "Planos e Preços" },
        { href: "/admin/subscriptions/coupons", label: "Cupons" },
        { href: "/admin/subscriptions/subscribers", label: "Assinantes" }
      ]
    },
    {
      icon: Settings,
      href: "/admin/settings",
      label: "Configurações",
      subItems: [
        { href: "/admin/settings/financial", label: "Financeiro" },
        { href: "/admin/settings/compliance", label: "Compliance" }
      ]
    },
    {
      icon: ArrowRightLeft,
      href: "/admin/negotiations",
      label: "Negociações",
      subItems: [
        { href: "/admin/negotiations/financial", label: "Financeiro" },
        { href: "/admin/negotiations/disputes", label: "Disputas" },
        { href: "/admin/negotiations/tradables", label: "Negociáveis" },
        { href: "/admin/negotiations/companies", label: "Companhias" }
      ]
    },
    {
      icon: Shield,
      href: "/admin/compliance",
      label: "Compliance",
      subItems: [
        { href: "/admin/compliance/companies", label: "Empresas" }
      ]
    },
    { icon: FileText, href: "/admin/content", label: "Conteúdo" },
    { icon: BarChart, href: "/admin/reports", label: "Relatórios" }
  ];

  // Company navigation
  const companyNav = [
    { icon: Home, href: "/company", label: "Dashboard" },
    {
      icon: Briefcase,
      href: "/company/profile",
      label: "Empresa",
      subItems: [
        { href: "/company/profile/branches", label: "Filiais" },
        { href: "/company/profile/details", label: "Perfil" }
      ]
    },
    {
      icon: Package,
      href: "/company/tradables",
      label: "Negociáveis",
      subItems: [
        { href: "/company/tradables/catalogs", label: "Catálogos" },
        { href: "/company/tradables/inventory", label: "Inventário" }
      ]
    },
    {
      icon: CreditCard,
      href: "/company/financial",
      label: "Financeiro",
      subItems: [
        { href: "/company/financial/payables", label: "Contas a Pagar" },
        { href: "/company/financial/receivables", label: "Contas a Receber" },
        { href: "/company/financial/bankaccounts", label: "Contas Bancárias" },
        { href: "/company/financial/approvals", label: "Aprovações de Pagamentos" }
      ]
    },
    { icon: Users, href: "/company/network", label: "Network" },
    { icon: CreditCard, href: "/company/subscriptions", label: "Assinaturas" }
  ];

  // Buyer navigation
  const buyerNav = [
    { icon: Home, href: "/buyer", label: "Dashboard" },
    {
      icon: ArrowRightLeft,
      href: "/buyer/negotiations",
      label: "Negociação",
      subItems: [
        { href: "/buyer/negotiations/quotes", label: "Cotações" },
        { href: "/buyer/negotiations/active", label: "Negociações" },
        { href: "/buyer/negotiations/orders", label: "Ordens de Compra" },
        { href: "/buyer/negotiations/disputes", label: "Disputas" }
      ]
    }
  ];

  // Seller navigation
  const sellerNav = [
    { icon: Home, href: "/seller", label: "Dashboard" },
    {
      icon: ArrowRightLeft,
      href: "/seller/negotiations",
      label: "Negociação",
      subItems: [
        { href: "/seller/negotiations/quotes", label: "Cotações" },
        { href: "/seller/negotiations/active", label: "Negociações" },
        { href: "/seller/negotiations/orders", label: "Ordens de Venda" },
        { href: "/seller/negotiations/disputes", label: "Disputas" }
      ]
    }
  ];

  // Cooperative navigation
  const cooperativeNav = [
    ...companyNav,
    { icon: Award, href: "/cooperative/training", label: "Treinamentos" },
    { icon: Users, href: "/cooperative/members", label: "Cooperados" }
  ];

  // Service provider navigation
  const providerNav = [
    { icon: Home, href: "/provider", label: "Dashboard" },
    { icon: Briefcase, href: "/provider/profile", label: "Perfil" },
    { icon: Truck, href: "/provider/services", label: "Serviços" },
    { icon: FileText, href: "/provider/articles", label: "Artigos" }
  ];

  // Select navigation based on role
  let navigation;
  switch (userRole) {
    case "admin":
      navigation = adminNav;
      break;
    case "buyer":
      navigation = buyerNav;
      break;
    case "seller":
      navigation = sellerNav;
      break;
    case "cooperative":
      navigation = cooperativeNav;
      break;
    case "provider":
      navigation = providerNav;
      break;
    default:
      navigation = companyNav;
  }

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-30 h-screen w-64 bg-background border-r",
        "transition-all duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "pt-20 pb-4 flex flex-col"
      )}
    >
      <div className="px-4 pb-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-agro-500 text-white rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
          <div>
            <p className="font-medium text-sm">Nome da Empresa</p>
            <p className="text-xs text-muted-foreground">{userRole}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <nav className="space-y-1">
          {navigation.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              href={item.href}
              label={item.label}
              active={location.pathname === item.href}
              subItems={item.subItems}
            />
          ))}
        </nav>
      </div>

      <div className="px-4 pt-4 border-t">
        <Link
          to="/settings"
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-agro-100 hover:text-agro-600 transition-colors"
        >
          <Settings className="h-5 w-5 mr-3" />
          Configurações
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
