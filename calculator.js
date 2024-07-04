import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("This is my result of the calculation: " + result);
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(path.join(__dirname, 'bmicalculator.html'));
});

app.post("/bmicalculator", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    const bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
