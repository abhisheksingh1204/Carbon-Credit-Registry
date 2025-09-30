import { Routes, Route } from "react-router-dom";
import { Toaster } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import LandingPage from "./pages/LandingPage";
// import NotFound from "./pages/not-found";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Fallback to 404 */}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

function Landing() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default Landing;
