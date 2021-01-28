// Import dependencies
const express = require("express");

// Initialize express app
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Home Route");
});

// Server listening at specified port
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server is running at port", PORT);
});
