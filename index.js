"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/hand-save", (req, res) => {
    res.render('hand-save');
});
app.get("/hand-table", (req, res) => {
    res.render('hand-table', { data: req.query });
});
app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});
