import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';
import { createHand, getHands, deleteHand } from './model/db.js';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/js"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const result = await getHands();
    res.render("index", {data: result});
});


app.post("/:id", async (req, res) => {
    deleteHand(req.params.id)
    res.redirect("/");
});

app.get("/hand-save", (req, res) => {
    res.render("hand-save");
});

app.get("/table", (req, res) => {
    createHand(req.query)
    res.render("table", {data: req.query} );
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});
