
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent";
  intensity?: "low" | "medium" | "high";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const GlassCard = ({
  className,
  variant = "default",
  intensity = "medium",
  hoverEffect = false,
  children,
  ...props
}: GlassCardProps) => {
  const baseClasses = "rounded-lg overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "glass",
    accent: "glass-accent",
  };
  
  const intensityClasses = {
    low: "backdrop-blur-sm bg-opacity-50",
    medium: "backdrop-blur-md bg-opacity-70",
    high: "backdrop-blur-lg bg-opacity-80",
  };
  
  const hoverClasses = hoverEffect 
    ? "hover:shadow-lg hover:-translate-y-1 hover:bg-opacity-90" 
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        intensityClasses[intensity],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { GlassCard };
