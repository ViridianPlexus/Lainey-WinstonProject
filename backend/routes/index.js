// backend/routes/index.js
const express = require("express");
const router = express.Router();

// Import the API router
const apiRouter = require("./api");

// Connect the API router to the '/api' path
router.use("/api", apiRouter);

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    "XSRF-Token": csrfToken,
  });
});

module.exports = router;
