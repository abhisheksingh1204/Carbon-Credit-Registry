import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";

function Router() {
  <Routes>
  </Routes>;
}

function Proponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default Proponent;
