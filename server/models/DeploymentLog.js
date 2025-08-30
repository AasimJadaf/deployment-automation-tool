// import mongoose from "mongoose";

// const deploymentLogSchema = new mongoose.Schema({
//   serviceName: { type: String, required: true },
//   status: { type: String, enum: ["success", "failed", "in-progress","pending"], required: true },
//   timestamp: { type: Date, default: Date.now },
//   triggeredBy: { type: String, required: true }
// });

// export default mongoose.model("DeploymentLog", deploymentLogSchema);
import mongoose from "mongoose";

const deploymentLogSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  repositoryUrl: { type: String, required: true },
  branch: { type: String, required: true },
  status: { type: String, enum: ["pending", "in-progress", "completed", "failed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("DeploymentLog", deploymentLogSchema);
