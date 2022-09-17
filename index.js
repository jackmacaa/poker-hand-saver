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
app.use(express_1.default.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
app.get("/hand-table", (req, res) => {
    console.log(req);
    res.sendFile(`${__dirname}/public/hand-table.html`);
});
app.get("/hand-save", (req, res) => {
    res.sendFile(`${__dirname}/public/hand-save.html`);
});
app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});
