var express = require("express");
var app = express();

app.get("/api/getDoctors/", (req, res, next) => {
  res.json(["Jay","Ajit","Prasad"]);
});

app.get("/health", (req, res, next) => {
  res.json(["Healthy"]);
});

app.listen(9093, () => {
 console.log("Server running on port 9093");
});



