// import express from "express";
// import Deployment from "../models/Deployment.js";

// const router = express.Router();

// // Create a new deployment
// router.post("/", async (req, res) => {
//   try {
//     const { projectName, repositoryUrl, branch } = req.body;
//     const deployment = await Deployment.create({ projectName, repositoryUrl, branch });
//     res.status(201).json(deployment);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating deployment", error: error.message });
//   }
// });

// // Get all deployments
// router.get("/", async (req, res) => {
//   try {
//     const deployments = await Deployment.find().sort({ createdAt: -1 });
//     res.json(deployments);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching deployments", error: error.message });
//   }
// });

// // Get a single deployment by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const deployment = await Deployment.findById(req.params.id);
//     if (!deployment) return res.status(404).json({ message: "Deployment not found" });
//     res.json(deployment);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching deployment", error: error.message });
//   }
// });

// // Update deployment status (e.g., success/failed)
// router.patch("/:id", async (req, res) => {
//   try {
//     const { status, logs } = req.body;
//     const deployment = await Deployment.findByIdAndUpdate(
//       req.params.id,
//       { status, $push: { logs: logs || "" } },
//       { new: true }
//     );
//     if (!deployment) return res.status(404).json({ message: "Deployment not found" });
//     res.json(deployment);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating deployment", error: error.message });
//   }
// });

// // Delete a deployment
// router.delete("/:id", async (req, res) => {
//   try {
//     const deployment = await Deployment.findByIdAndDelete(req.params.id);
//     if (!deployment) return res.status(404).json({ message: "Deployment not found" });
//     res.json({ message: "Deployment deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting deployment", error: error.message });
//   }
// });

// export default router;




// import express from "express";
// import Deployment from "../models/Deployment.js";

// const router = express.Router();

// // Create a new deployment
// router.post("/", async (req, res) => {
//   try {
//     const {
//       projectName,
//       repositoryUrl,
//       branch,
//       triggeredBy = "manual", // default if not provided
//       status = "pending",     // default if not provided
//       serviceName = "default-service" // default if not provided
//     } = req.body;

//     const deployment = await Deployment.create({
//       projectName,
//       repositoryUrl,
//       branch,
//       triggeredBy,
//       status,
//       serviceName
//     });

//     res.status(201).json(deployment);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error creating deployment",
//       error: error.message
//     });
//   }
// });

// // Get all deployments
// router.get("/", async (req, res) => {
//   try {
//     const deployments = await Deployment.find().sort({ createdAt: -1 });
//     res.json(deployments);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching deployments", error: error.message });
//   }
// });

// // Get a single deployment by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const deployment = await Deployment.findById(req.params.id);
//     if (!deployment) return res.status(404).json({ message: "Deployment not found" });
//     res.json(deployment);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching deployment", error: error.message });
//   }
// });

// // Update deployment status (e.g., success/failed)
// router.patch("/:id", async (req, res) => {
//   try {
//     const { status, logs } = req.body;
//     const deployment = await Deployment.findByIdAndUpdate(
//       req.params.id,
//       { status, $push: { logs: logs || "" } },
//       { new: true }
//     );
//     if (!deployment) return res.status(404).json({ message: "Deployment not found" });
//     res.json(deployment);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating deployment", error: error.message });
//   }
// });

// // Delete a deployment
// router.delete("/:id", async (req, res) => {
//   try {
//     const deployment = await Deployment.findByIdAndDelete(req.params.id);
//     if (!deployment) return res.status(404).json({ message: "Deployment not found" });
//     res.json({ message: "Deployment deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting deployment", error: error.message });
//   }
// });

// export default router;


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
