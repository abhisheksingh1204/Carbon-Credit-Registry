import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "../components/Footer";
import Login from "./pages/auth/Login";
import NotFound from "../pages/NotFound";

function ProponentLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function Proponent() {
  return (
    <Routes>
      <Route element={<ProponentLayout />}>
        <Route index element={<Login />} />
        <Route path="auth/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
