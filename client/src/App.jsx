import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./landing/Landing";
import Admin from "./admin/Admin";
import Proponent from "./proponent/Proponent";
import Auditor from "./auditor/Auditor";

function App() {
  return (
    <Router>
      <Routes>
        {/* default route */}
        <Route path="/" element={<Landing />} />

        {/* role-based routes */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/proponent/*" element={<Proponent />} />
        <Route path="/auditor/*" element={<Auditor />} />
        
        {/* fallback */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;