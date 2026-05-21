const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.use(express.json({ limit: "10mb" }));

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ALLOWED_ORIGIN = "https://techxserve.com";

// CORS + preflight
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

app.post("/api/send-email", async (req, res) => {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    res.json(data);
  } catch (err) {
    console.error("Email proxy error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Email proxy running on http://127.0.0.1:${PORT}`);
});
