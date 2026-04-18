import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Determine the correct path for static files
  const isProduction = process.env.NODE_ENV === "production";
  
  // In production (Vercel), files are in dist/
  // In development, files are in dist/
  const staticPath = isProduction 
    ? path.resolve(__dirname, "..", "dist")
    : path.resolve(__dirname, "..", "dist");

  // Serve static files
  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
