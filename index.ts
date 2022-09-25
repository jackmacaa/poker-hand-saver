import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/js"));
app.set("view engine", "ejs" )

app.get("/", (req: Request, res: Response) => {
    res.render('index');
});

app.get("/hand-save", (req: Request, res: Response) => {
    res.render('hand-save');
});

app.get("/table", (req: Request, res: Response) => {
    res.render('table', { data: req.query });
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});
