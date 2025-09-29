const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

function getAppBasePath(host) {
  host = (host || "").toLowerCase();
  if (host.startsWith("admin"))
    return path.join(__dirname, "../client/apps/admin/dist");
  if (host.startsWith("proponent"))
    return path.join(__dirname, "../client/apps/proponent/dist");
  if (host.startsWith("auditor"))
    return path.join(__dirname, "../client/apps/auditor/dist");
  return path.join(__dirname, "../client/apps/landing/dist");
}

// Serve static files
app.use((req, res, next) => {
  const host = req.headers.host || "localhost";
  const base = getAppBasePath(host);
  express.static(base)(req, res, next);
});

// SPA fallback for React Router
app.get(/.*/, (req, res) => {
  const host = req.headers.host || "localhost";
  const indexPath = path.join(getAppBasePath(host), "index.html");
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Landing: http://localhost:${PORT}`);
  console.log(`Admin: http://admin.localhost:${PORT}`);
  console.log(`Proponent: http://proponent.localhost:${PORT}`);
  console.log(`Auditor: http://auditor.localhost:${PORT}`);
});
