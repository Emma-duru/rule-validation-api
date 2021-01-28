const {
  validateRuleandData,
  ruleFieldValidate,
  validateRule,
} = require("../utils");

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

  if (
    !validateRuleandData(rule, data, response) ||
    !validateRule(rule, data, response)
  ) {
    response.status = "error";
    response.data = null;
    res.status(400);
  }
  // Check if rule field is validated
  else {
    if (ruleFieldValidate(rule, data)) {
      response.message = `field ${rule.field} successfully validated.`;
      response.status = "success";
      response.data = {
        validation: {
          error: false,
          field: rule.field,
          field_value: data[rule.field],
          condition: rule.condition,
          condition_value: rule.condition_value,
        },
      };
      res.status(200);
    } else {
      response.message = `field ${rule.field} failed validation`;
      response.status = "error";
      response.data = {
        validation: {
          error: true,
          field: rule.field,
          field_value: data[rule.field],
          condition: rule.condition,
          condition_value: rule.condition_value,
        },
      };
      res.status(400);
    }
  }

  res.json(response);
};

module.exports = {
  home_get,
  validate_rule_post,
};
