import express from "express";
import DeploymentLog from "../models/DeploymentLog.js";
const router = express.Router();

// Create a new deployment log
router.post("/", async (req, res) => {
  try {
    const {
      projectName,
      repositoryUrl,
      branch,
      triggeredBy,
      status,
      serviceName
    } = req.body;

    const deployment = await DeploymentLog.create({
      projectName,
      repositoryUrl,
      branch,
      triggeredBy,
      status,
      serviceName
    });

    res.status(201).json({
      message: "Deployment created successfully",
      deployment
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating deployment",
      error: error.message
    });
  }
});

export default router;
