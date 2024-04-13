const express = require("express");
const connectDB = require("./config/db");
const testRouter = require("./Router/testRouter");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Enable CORS for all routes
const corsConfig = {
  origin: `${process.env.API_URL}`,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));

// Body parsing middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use("/", testRouter);

// Default route
app.get("/", (req, res) => {
  res.json("Server is running");
  console.log("Server is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Port configuration
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
