const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let bmi = height / (height * height);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
