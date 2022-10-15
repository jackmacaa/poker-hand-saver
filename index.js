import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import {fileURLToPath} from 'url';
import { run } from "./model/Hand.js";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/js"));
app.set("view engine", "ejs");

run();

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hand-save", (req, res) => {
  res.render("hand-save");
});

app.get("/table", (req, res) => {
  res.render("table", { data: req.query });
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
