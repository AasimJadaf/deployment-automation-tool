// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import deploymentRoutes from "./server/routes/deploymentRoutes.js";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes (define before DB connect)
// app.use("/api/deployments", deploymentRoutes);

// // Base Route
// app.get("/", (req, res) => {
//     res.send("Deployment Automation Tool API is running...");zaq  
// });

// // Server Port
// const PORT = process.env.PORT || 5000;

// // MongoDB Connection + Start Server only after connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 10000 // 10 sec timeout
//   })
//   .then(() => {
//     console.log("MongoDB connected successfully!");
//     app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));




// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import deploymentRoutes from "./server/routes/deploymentRoutes.js";

// dotenv.config();
// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("✅ MongoDB connected");
//   app.listen(process.env.PORT, () =>
//     console.log(`Server running on port ${process.env.PORT}`)
//   );
// })
// .catch(err => {
//   console.error("❌ MongoDB connection failed:", err);
// });
// app.use("/api/deployments", deploymentRoutes);

import express from "express";
import mongoose from "mongoose";
import deploymentRoutes from "./server/routes/deploymentRoutes.js"; // adjust path if needed

const app = express();
app.use(express.json());

const PORT = 5000;
const MONGO_URI = "mongodb+srv://aasim:pinkvenom@deploy-automation-db.sguvw3w.mongodb.net/deployments?retryWrites=true&w=majority";

// Function to connect to MongoDB and start the server

app.get("/", (req, res) => {
  res.send("Deployment Automation API is running!");
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // optional: faster failure if something's wrong
    });

    console.log("MongoDB connected successfully");
    app.use("/api/deployments", deploymentRoutes);

    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Stop the server if DB is not connected
  }
};

startServer();
