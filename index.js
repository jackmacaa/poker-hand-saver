const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/hand-table", (req, res) => {
  res.sendFile(`${__dirname}/public/hand-table.html`);
});

app.get("/hand-save", (req, res) => {
  res.sendFile(`${__dirname}/public/hand-save.html`);
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
