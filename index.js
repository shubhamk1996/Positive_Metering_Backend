require("./db");
const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");
const app = express();
const env = require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
 
// Routes
try {
  const CultureCategoryRoutes = require("./src/routes/cultureCategoryRoutes");
  app.use("/culture_category", CultureCategoryRoutes);
  const cultureCategoryDetailsRoutes = require("./src/routes/cultureCategoryDetailsRoute");
  app.use("/culture_category_details", cultureCategoryDetailsRoutes);
  const clientCountRoutes = require("./src/routes/clientCountRouters");
  app.use("/clientCount", clientCountRoutes);
  const appreciationRoutes = require("./src/routes/AppreciationRoute");
  app.use("/appreciation", appreciationRoutes);
  const loginRoutes = require("./src/routes/userRoutes");
  app.use("/auth", loginRoutes);
} catch (error) {
  console.error("Error while loading routes:", error);
}

app.get("/", (req, res) => {
  res.send(`Server is running on port no. ${process.env.APP_PORT}`);
});

// Start server
try {
  app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port no. ${process.env.APP_PORT}`);
  });
} catch (error) {
  console.error("Error while starting server:", error);
}
