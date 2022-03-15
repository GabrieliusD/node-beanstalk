const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("main page");
  res.send("Welcome to the home page");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
