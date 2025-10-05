import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "../components/Footer";
import Login from "./pages/auth/Login";
import NotFound from "../pages/NotFound";

function ProponentRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function Proponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <ProponentRoutes   />
      </main>
      <Footer />
    </div>
  );
}

export default Proponent;
