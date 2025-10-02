import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "../common/pages/NotFound";

function Landing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* Fallback to 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Landing;
