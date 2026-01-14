import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running on Vercel ✅");
});

app.get("/drug", (req, res) => {
  res.json({ ok: true, message: "Drug endpoint works" });
});

export default app;

