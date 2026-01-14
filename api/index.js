import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import drugRoutes from "../routes/drugRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running on Vercel");
});

app.use("/drug", drugRoutes);

// 👇 DETTA ÄR DET VIKTIGA
export default serverless(app);
