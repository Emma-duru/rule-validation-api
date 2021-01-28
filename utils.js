// Validates the rule and data fields
const validateRuleandData = (rule, data, response) => {
  if (!rule || !data) {
    response.message = !rule ? "rule is required." : "data is required.";
    return false;
  } else if (typeof rule !== "object") {
    response.message = "rule should be an object.";
    return false;
  } else if (typeof data !== "object" && typeof data !== "string") {
    response.message = "data should be an object, array or string.";
    return false;
  } else {
    return true;
  }
};

// Validates the properties in the rule field
const validateRule = (rule, data, response) => {
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

// Check if the rule field condition is true
const ruleFieldValidate = (rule, data) => {
  const result =
    rule.condition === "eq"
      ? data[rule.field] === rule.condition_value
      : rule.condition === "neq"
      ? data[rule.field] !== rule.condition_value
      : rule.condition === "gt"
      ? data[rule.field] > rule.condition_value
      : rule.condition === "gte"
      ? data[rule.field] >= rule.condition_value
      : rule.condition === "contains"
      ? data[rule.fields].includes(rule.condition_value)
      : "";
  return result;
};

module.exports = {
  validateRule,
  validateRuleandData,
  ruleFieldValidate,
};
