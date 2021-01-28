// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

// Initialize express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(apiRoutes);

// Server listening at specified port
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server is running at port", PORT);
});
