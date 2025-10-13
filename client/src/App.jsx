import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/sonner";
import Landing from "./landing/Landing";
import Admin from "./admin/Admin";
import Proponent from "./proponent/Proponent";
import Auditor from "./auditor/Auditor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* default route */}
        <Route path="/" element={<Navigate to="/landing" replace />} />

        {/* role-based routes */}
        <Route path="/landing/*" element={<Landing />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/proponent/*" element={<Proponent />} />
        <Route path="/auditor/*" element={<Auditor />} />

        {/* fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
