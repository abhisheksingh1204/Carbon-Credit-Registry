const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Helper function to get app path based on host
function getAppPath(host, forIndex = false) {
  host = host || "localhost"; // fallback

  let basePath;
  if (host.startsWith("admin"))
    basePath = path.join(__dirname, "../client/admin/dist");
  else if (host.startsWith("proponent"))
    basePath = path.join(__dirname, "../client/proponent/dist");
  else if (host.startsWith("verifier"))
    basePath = path.join(__dirname, "../client/verifier/dist");
  else basePath = path.join(__dirname, "../client/landing/dist");

  return forIndex ? path.join(basePath, "index.html") : basePath;
}

// Serve static files
app.use((req, res, next) => {
  const host = req.headers.host || "localhost";
  const appPath = getAppPath(host);
  express.static(appPath)(req, res, next);
});

// SPA routing for React Router
app.get(/.*/, (req, res) => {
  const host = req.headers.host || "localhost";
  const indexPath = getAppPath(host, true);
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
