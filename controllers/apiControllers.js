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
