const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

function getAppBasePath(host) {
  host = (host || "").toLowerCase();
  if (host.startsWith("admin"))
    return path.join(__dirname, "../apps/admin/dist");
  if (host.startsWith("proponent"))
    return path.join(__dirname, "../apps/proponent/dist");
  if (host.startsWith("verifier"))
    return path.join(__dirname, "../apps/verifier/dist");
  return path.join(__dirname, "../apps/landing/dist");
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
  console.log(`Verifier: http://verifier.localhost:${PORT}`);
});
