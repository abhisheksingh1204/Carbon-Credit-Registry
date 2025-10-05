import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";

function Landing() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />

      {/* Fallback to 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Landing;
