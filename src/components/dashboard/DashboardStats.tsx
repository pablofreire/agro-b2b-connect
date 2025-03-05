
import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  ShoppingCart, 
  BarChart, 
  Users, 
  AlertTriangle 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, change, className }: StatCardProps) => {
  return (
    <GlassCard className={cn("p-6", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h4 className="text-2xl font-bold">{value}</h4>
          
          {change && (
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium flex items-center",
                change.positive 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-red-600 dark:text-red-400"
              )}>
                {change.positive ? (
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-1" />
                )}
                {change.value}
              </span>
              <span className="text-xs text-muted-foreground ml-2">vs último mês</span>
            </div>
          )}
        </div>
        
        <div className="p-3 rounded-full bg-agro-100 text-agro-600 dark:bg-agro-900 dark:text-agro-300">
          {icon}
        </div>
      </div>
    </GlassCard>
  );
};

interface DashboardStatsProps {
  userRole?: "admin" | "company" | "buyer" | "seller" | "cooperative" | "provider";
}

const DashboardStats = ({ userRole = "company" }: DashboardStatsProps) => {
  // Render different stats based on user role
  if (userRole === "admin") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Usuários Ativos" 
          value="1,254" 
          icon={<Users size={20} />} 
          change={{ value: "+12.5%", positive: true }}
        />
        <StatCard 
          title="Novas Empresas" 
          value="48" 
          icon={<ShoppingCart size={20} />} 
          change={{ value: "+8.2%", positive: true }}
        />
        <StatCard 
          title="Receita Mensal" 
          value="R$ 87.500" 
          icon={<DollarSign size={20} />} 
          change={{ value: "+15.3%", positive: true }}
        />
        <StatCard 
          title="Disputas Abertas" 
          value="12" 
          icon={<AlertTriangle size={20} />} 
          change={{ value: "-3.2%", positive: true }}
        />
      </div>
    );
  }
  
  if (userRole === "buyer") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Cotações Ativas" 
          value="8" 
          icon={<ShoppingCart size={20} />} 
          change={{ value: "+2", positive: true }}
        />
        <StatCard 
          title="Negociações Pendentes" 
          value="3" 
          icon={<BarChart size={20} />} 
          change={{ value: "+1", positive: true }}
        />
        <StatCard 
          title="Ordens de Compra" 
          value="12" 
          icon={<ShoppingCart size={20} />} 
          change={{ value: "+4", positive: true }}
        />
        <StatCard 
          title="Pagamentos Pendentes" 
          value="R$ 12.580" 
          icon={<DollarSign size={20} />} 
          change={{ value: "+R$ 4.250", positive: false }}
        />
      </div>
    );
  }
  
  if (userRole === "seller") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Cotações Disponíveis" 
          value="14" 
          icon={<ShoppingCart size={20} />} 
          change={{ value: "+5", positive: true }}
        />
        <StatCard 
          title="Negociações Ativas" 
          value="7" 
          icon={<BarChart size={20} />} 
          change={{ value: "+2", positive: true }}
        />
        <StatCard 
          title="Ordens de Venda" 
          value="9" 
          icon={<ShoppingCart size={20} />} 
          change={{ value: "+3", positive: true }}
        />
        <StatCard 
          title="Recebimentos Pendentes" 
          value="R$ 24.750" 
          icon={<DollarSign size={20} />} 
          change={{ value: "+R$ 8.320", positive: true }}
        />
      </div>
    );
  }
  
  // Default company view
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        title="Negociações Ativas" 
        value="15" 
        icon={<BarChart size={20} />} 
        change={{ value: "+5", positive: true }}
      />
      <StatCard 
        title="Receita Mensal" 
        value="R$ 45.790" 
        icon={<DollarSign size={20} />} 
        change={{ value: "+12.3%", positive: true }}
      />
      <StatCard 
        title="Produtos Cadastrados" 
        value="124" 
        icon={<ShoppingCart size={20} />} 
        change={{ value: "+8", positive: true }}
      />
      <StatCard 
        title="Colaboradores" 
        value="8" 
        icon={<Users size={20} />} 
        change={{ value: "+1", positive: true }}
      />
    </div>
  );
};

export default DashboardStats;
