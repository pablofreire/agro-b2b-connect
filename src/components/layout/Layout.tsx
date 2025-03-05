
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { PageTransition } from "@/components/ui/page-transition";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showFooter?: boolean;
  userRole?: "admin" | "company" | "buyer" | "seller" | "cooperative" | "provider";
  fullWidth?: boolean;
}

const Layout = ({
  children,
  showSidebar = false,
  showFooter = true,
  userRole = "company",
  fullWidth = false
}: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Check if we're on a public page
  const isPublicPage = ["/", "/login", "/register", "/forgot-password"].includes(location.pathname);

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <div className="bg-texture"></div>
      
      <Header
        toggleSidebar={showSidebar ? toggleSidebar : undefined}
        sidebarOpen={sidebarOpen}
      />
      
      {showSidebar && (
        <Sidebar isOpen={sidebarOpen} userRole={userRole} />
      )}
      
      <main 
        className={cn(
          "flex-1 transition-all duration-300 pt-16 min-h-screen",
          showSidebar && "md:ml-64",
          sidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        <div className={cn(
          "h-full",
          fullWidth ? "" : "container mx-auto px-4 py-6"
        )}>
          <PageTransition location={location.pathname}>
            {children}
          </PageTransition>
        </div>
        
        {showFooter && <Footer />}
      </main>
    </div>
  );
};

export default Layout;
