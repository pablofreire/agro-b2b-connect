
import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "admin" | "company" | "buyer" | "seller" | "cooperative" | "provider";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company?: {
    id: string;
    name: string;
    type: "company" | "cooperative" | "provider";
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}

interface RegisterData {
  cnpj: string;
  email: string;
  phone: string;
  password: string;
  companyName?: string;
  businessType?: string;
  acceptTerms: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // For test credentials
      if (email === "teste" && password === "123") {
        const mockUser: User = {
          id: "1",
          name: "Usuário Teste",
          email: "teste@agro.com",
          role: "company",
          company: {
            id: "1",
            name: "Empresa Teste",
            type: "company"
          }
        };
        
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        return;
      }
      
      // Simulating API call for other users
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll create a mock user based on email
      const mockUser: User = {
        id: "1",
        name: "Usuário Demo",
        email,
        role: email.includes("admin") 
          ? "admin" 
          : email.includes("buyer") 
            ? "buyer" 
            : email.includes("seller") 
              ? "seller" 
              : "company",
        company: {
          id: "1",
          name: "Empresa Demo",
          type: "company"
        }
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo, we'll just log the data
      console.log("Register data:", data);
      
      // Auto login after register
      const mockUser: User = {
        id: "2",
        name: data.companyName || "Nova Empresa",
        email: data.email,
        role: "company",
        company: {
          id: "2",
          name: data.companyName || "Nova Empresa",
          type: "company"
        }
      };
      
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Password reset requested for:", email);
  };

  const resetPassword = async (token: string, password: string) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Password reset with token:", token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
        forgotPassword,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
