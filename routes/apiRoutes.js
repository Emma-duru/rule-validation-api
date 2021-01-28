const router = require("express").Router();
const {
  home_get,
  validate_rule_post,
} = require("../controllers/apiControllers");

router.get("/", home_get);

router.post("/validate-rule", validate_rule_post);

module.exports = router;
