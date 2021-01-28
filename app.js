// Import dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

// Initialize express app
const app = express();

// Routes
app.use(apiRoutes);

// Server listening at specified port
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server is running at port", PORT);
});
