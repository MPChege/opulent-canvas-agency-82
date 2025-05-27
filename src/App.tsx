
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              {/* Placeholder routes for future pages */}
              <Route path="/services" element={<GenericPage title="Our Services" />} />
              <Route path="/philosophy" element={<GenericPage title="Our Philosophy" />} />
              <Route path="/projects" element={<GenericPage title="Our Projects" />} />
              <Route path="/team" element={<GenericPage title="Our Team" />} />
              <Route path="/contact" element={<GenericPage title="Contact Us" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// A simple placeholder component for new pages
const GenericPage = ({ title }: { title: string }) => (
  <div className="container mx-auto py-16 px-6 text-center">
    <h1 className="text-4xl font-serif font-bold mb-4">{title}</h1>
    <p className="text-xl text-gray-600">Content coming soon for the {title.toLowerCase()} page.</p>
    <img src="/placeholder.svg" alt="Under construction" className="mx-auto mt-8 w-1/2 md:w-1/3 opacity-50" />
  </div>
);


export default App;
