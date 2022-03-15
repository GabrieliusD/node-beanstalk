const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("main page");
  res.send("Welcome to the home page");
});
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Server running on port 3000");
});
