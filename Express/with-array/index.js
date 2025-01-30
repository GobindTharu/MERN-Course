import express from "express";

// create app
const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Hello World from express </h1>");
});

app.get("/home/user", (req, res) => {
  return res.send(`welcome to home`);
});

app.post("/home/name", (req, res) => {
  return res.send(`We are on post man `);
});

const userList = [];

app.post("/user/add", (req, res) => {
  const user = {
    name: "gobind",
    id: 1,
  };
  userList.push(user);
  return res.send({ message: " user is added to the array" });
});

app.get("/user/list", (req, res) => {
  return res.status(200).send(userList);
});

const movieLists = [];

app.post("/movie/add", (req, res) => {
  const movie = {
    name: "Forest Dump",
  };

  movieLists.push(movie);
  return res.status(200).send({ message: "movie list is added" });
});

app.get("/movie/list", (req, res) => {
  return res.send({ message: "sucesss", movieLists });
});

// network
const PORT = 8000;

// listen a port

app.listen(PORT, () => {
  console.log(`Api is listening port ${PORT}`);
});
