import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../config/DB.js";
import drugRoutes from "../routes/drugRoutes.js";
import admin from "firebase-admin"; 


import express from "express";
import cors from "cors";
import { connectDB } from "../config/DB.js";
import drugRoutes from "../routes/drugRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ⚠️ Tillfälligt: kommentera bort DB också om du vill vara 100 % säker
//connectDB();

app.get("/", (_req, res) => {
  res.send("Backend running without auth");
});

app.use("/drug", drugRoutes);

export default app;