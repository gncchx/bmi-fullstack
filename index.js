const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let bmi = weight / (height * height);
  let output = "";

  if (bmi < 18.5) {
    output = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    output = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    output = "Overweight";
  } else {
    output = "Obese";
  }

  res.send(`Your BMI is ${output}.`);
});

app.listen(port, () => {
  console.log(`BMI app listening on port ${port}`);
});
