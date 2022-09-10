const express = require('express');
import { Request, Response } from 'express';
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req: Request, res: Response) => {
    res.sendFile()
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/hand-table", (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/public/hand-table.html`);
});

app.get("/hand-save", (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/public/hand-save.html`);
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});
