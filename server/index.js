const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS for your frontend domain and localhost
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://bluecarboncredit.vercel.app",
      /\.bluecarboncredit\.vercel\.app$/, // Allow subdomains
    ],
    credentials: true,
  })
);

function getAppBasePath(host) {
  host = (host || "").toLowerCase();

  // Support both localhost and deployed subdomains
  if (host.startsWith("admin") || host.includes("admin.")) {
    return path.join(__dirname, "../client/apps/admin/dist");
  }
  if (host.startsWith("proponent") || host.includes("proponent.")) {
    return path.join(__dirname, "../client/apps/proponent/dist");
  }
  if (host.startsWith("auditor") || host.includes("auditor.")) {
    return path.join(__dirname, "../client/apps/auditor/dist");
  }
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
  console.log(
    `Landing: http://localhost:${PORT} or https://bluecarboncredit.vercel.app`
  );
  console.log(
    `Admin: http://admin.localhost:${PORT} or https://admin.bluecarboncredit.vercel.app`
  );
  console.log(
    `Proponent: http://proponent.localhost:${PORT} or https://proponent.bluecarboncredit.vercel.app`
  );
  console.log(
    `Auditor: http://auditor.localhost:${PORT} or https://auditor.bluecarboncredit.vercel.app`
  );
});
