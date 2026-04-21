import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { saveSubscriber } from "./subscribers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/subscribe", async (req, res) => {
    const email =
      typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";
    const source =
      typeof req.body?.source === "string"
        ? req.body.source.trim().slice(0, 80)
        : "site";
    const page =
      typeof req.body?.page === "string"
        ? req.body.page.trim().slice(0, 120)
        : undefined;

    if (!emailPattern.test(email)) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address." });
    }

    try {
      const status = await saveSubscriber({
        email,
        source,
        page,
        subscribedAt: new Date().toISOString(),
      });

      if (status === "exists") {
        return res.status(200).json({
          ok: true,
          status,
          message: "You're already on the Rustwood Weekly list.",
        });
      }

      return res.status(201).json({
        ok: true,
        status,
        message: "Thanks — you're on the Rustwood Weekly list.",
      });
    } catch (error) {
      console.error("Could not save subscriber:", error);
      return res.status(500).json({
        error: "Couldn't save your subscription right now. Please try again.",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

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
