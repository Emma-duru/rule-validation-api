const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Home Route");
});

router.get("/validate-rule", (req, res) => {
  res.send("Validation Route");
});

module.exports = router;
