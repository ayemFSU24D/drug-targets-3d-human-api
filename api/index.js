import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend running on Vercel ✅");
});

// 👇 DETTA ÄR DET VIKTIGA
export default function handler(req, res) {
  app(req, res);
}
