const response = {
  message: "",
  status: "",
  data: {},
};

// Controller for the home "/" route
const home_get = (req, res) => {
  response["message"] = "My Rule Validation API";
  response["status"] = "success";
  response["data"] = {
    name: "Duru, Emmanuella Victoria",
    github: "@Emma-duru",
    email: "emmavduru@gmail.com",
    mobile: +2348059300673,
  };

  // Outputs the response
  res.json(response);
};

// Controller for the validate_rule route
const validate_rule_post = (req, res) => {
  const { rule, data } = req.body;

  // Check if the rule and data properties are valid
  const validateRuleandData = (rule, data) => {
    if (!rule || !data) {
      response.message = !rule ? "rule is required." : "data is required.";
      return false;
    } else if (typeof rule !== "object") {
      response.message = "rule should be an object";
      return false;
    } else if (typeof data !== "object" && typeof data !== "string") {
      response.message = "data should be an object, array or string.";
      return false;
    } else {
      return true;
    }
  };

  // Validates the properties in the rule field
  const validateRule = (rule, data) => {
    if (!rule.field || !rule.condition || !rule.condition_value) {
      response.message = !rule.field
        ? "rule field is required."
        : !rule.condition
        ? "rule condition is required."
        : "rule condition value is required.";
      return false;
    } else if (!data[rule.field]) {
      response.message = `field ${rule.field} is missing from data.`;
      return false;
    } else {
      return true;
    }
  };

  if (!validateRuleandData(rule, data) || !validateRule(rule, data)) {
    response.status = "error";
    response.data = null;
    res.status(400);
  }

  res.json(response);
};

module.exports = {
  home_get,
  validate_rule_post,
};
