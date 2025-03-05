
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import AdminIndex from "./pages/Admin/Index";
import CompanyIndex from "./pages/Company/Index";
import BuyerIndex from "./pages/Buyer/Index";
import SellerIndex from "./pages/Seller/Index";

// New pages
import CompaniesIndex from "./pages/Companies/Index";
import BuyersIndex from "./pages/Buyers/Index";
import SellersIndex from "./pages/Sellers/Index";
import AuctionsIndex from "./pages/Auctions/Index";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminIndex />} />
            {/* Add more admin routes as needed */}

            {/* Company Routes */}
            <Route path="/company" element={<CompanyIndex />} />
            {/* Add more company routes as needed */}

            {/* Buyer Routes */}
            <Route path="/buyer" element={<BuyerIndex />} />
            {/* Add more buyer routes as needed */}

            {/* Seller Routes */}
            <Route path="/seller" element={<SellerIndex />} />
            {/* Add more seller routes as needed */}

            {/* New Pages */}
            <Route path="/companies" element={<CompaniesIndex />} />
            <Route path="/buyers" element={<BuyersIndex />} />
            <Route path="/sellers" element={<SellersIndex />} />
            <Route path="/auctions" element={<AuctionsIndex />} />

            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
