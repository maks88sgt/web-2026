import fs from "fs";
import express, { type Express, type Request, type Response } from "express";
import users from "./routers/users.ts"
import logger from "./middlewares/logger.ts"

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
app.post("/user", (req: Request, res: Response) => {
  const { username, id } = req.body;
  if (!id || !username) {
    res.status(400);
    res.send("id and username required");
  }

  fs.appendFile("output.txt", `${id}:${username}, `, (err) => {
    if (err) {
      console.error("Ошибка:", err);
      return;
    }
    console.log("Файл записан успешно!");
  });

  db[id] = username;

  res.send(`User with ${username} and ${id} saved in DB`);
});

app.get("/user/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const username = db[id];

  if (!username) {
    res.send(`User with id=${id} not found`);
  }

  res.send(`User with id=${id} found. His username is ${username}`);
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});


app.use(express.static("static"));