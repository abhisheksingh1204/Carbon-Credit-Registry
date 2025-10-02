import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import NotFound from "./pages/not-found";

function Landing() {
  return (
      <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* Fallback to 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Landing;
