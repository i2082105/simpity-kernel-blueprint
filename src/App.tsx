import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import CaseStudies from "./pages/CaseStudies";
import Methodology from "./pages/Methodology";
import Technology from "./pages/Technology";
import Engagement from "./pages/Engagement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import History from "./pages/History";
import Blog from "./pages/Blog";
import KernelCapability from "./pages/capability/KernelCapability";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/kernel" element={<KernelCapability />} />
          <Route path="/capabilities/authentication" element={<KernelCapability />} />
          <Route path="/capabilities/patch-tuesday" element={<KernelCapability />} />
          <Route path="/capabilities/filesystem" element={<KernelCapability />} />
          <Route path="/capabilities/detection" element={<KernelCapability />} />
          <Route path="/capabilities/active-directory" element={<KernelCapability />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/history" element={<History />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
