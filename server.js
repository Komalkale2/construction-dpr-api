require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const dprRoutes = require("./routes/dprRoutes");

const app = express();

/* =========================
   Middleware
========================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   Test Route
========================= */

app.get("/", (req, res) => {
  res.send("🚀 Construction DPR API is running");
});

/* =========================
   API Routes
========================= */

app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/projects/:id/dpr", dprRoutes);

/* =========================
   Database + Server Start
========================= */

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });