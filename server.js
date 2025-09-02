import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import deploymentRoutes from "./server/routes/deploymentRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Deployment Automation API is running!");
});

const startServer = async () => {
  try {
    if (!MONGO_URI) {
      console.error("MONGO_URI is not set. Please define it in your .env file.");
      process.exit(1);
    }

    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected successfully");
    app.use("/api/deployments", deploymentRoutes);
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
    
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();