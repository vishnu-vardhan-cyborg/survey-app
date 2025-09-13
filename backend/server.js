const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Initialize express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth"); // adjust path if needed
app.use("/api/auth", authRoutes);

// Test route
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
