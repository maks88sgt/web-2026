import fs from "fs";
import express, { type Express, type Request, type Response } from "express";
import users from "./routers/users.ts"
import logger from "./middlewares/logger.ts"
import connectDB from "./utils/connectDB.ts"

const app: Express = express();

const PORT = 3000;

const db: { [key: string]: string } = {};

app.use(express.json());

app.use(logger)

app.use('/users', users)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", {root: "static"});
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

connectDB()


app.use(express.static("static"));