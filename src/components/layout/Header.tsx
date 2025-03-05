
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  toggleSidebar?: () => void;
  sidebarOpen?: boolean;
}

const Header = ({ toggleSidebar, sidebarOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check system preference
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 lg:px-8 ${
        scrolled ? "py-2 glass shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {toggleSidebar && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-2"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="bg-agro-500 text-white p-2 rounded-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17.9999L3 13.9999M3 13.9999L7 9.99994M3 13.9999H16M16 5.99994H19C20.1046 5.99994 21 6.89537 21 7.99994V17.9999C21 19.1045 20.1046 19.9999 19 19.9999H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="font-semibold text-xl tracking-tight">AgroB2B</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="hover:text-agro-600 transition-colors">Sobre</Link>
          <Link to="/products" className="hover:text-agro-600 transition-colors">Produtos</Link>
          <Link to="/pricing" className="hover:text-agro-600 transition-colors">Preços</Link>
          <Link to="/contact" className="hover:text-agro-600 transition-colors">Contato</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
              <User size={16} />
              <span>Login</span>
            </Button>
          </Link>

          <Link to="/register">
            <Button className="hidden sm:inline-flex">Registrar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
