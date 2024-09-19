// backend/routes/api/index.js
const express = require("express");
const router = express.Router();

// Test route at /api/test
router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
