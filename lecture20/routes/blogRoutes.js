const express = require("express");
const { isLogin } = require("../middleware/middleware.js");
const router = express.Router();
router.use(isLogin);
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "a blog added successfully",
  });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    success: true,
    message: `a blog with id ${id} fetched successfully`,
  });
});
module.exports = router;
