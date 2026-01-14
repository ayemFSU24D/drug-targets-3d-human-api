import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../config/DB.js";
import drugRoutes from "../routes/drugRoutes.js";
import admin from "firebase-admin"; 



dotenv.config();  // funkar lokalt, ignoreras på Vercel

const serviceAccount = JSON.parse(
  process.env.SERVICE_ACCOUNT_FILE.replace(/\\n/g, "\n")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (_req, res) => {
  res.send("Backend running");
});

app.use("/drug", drugRoutes);
app.use("/auth/drug", drugRoutes);
app.use("/free/drug", drugRoutes);

export default app; // 👈 VIKTIGT (serverless)
