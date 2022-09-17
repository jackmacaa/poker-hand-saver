import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/hand-table", (req: Request, res: Response) => {
    console.log(req);
    
    res.sendFile(`${__dirname}/public/hand-table.html`);
});

app.get("/hand-save", (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/public/hand-save.html`);
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});

