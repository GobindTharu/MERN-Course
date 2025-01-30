import express from "express";

// create app
const app = express();
app.use(express.json());

let artistList = [
  {
    id: 1,
    name: "sujan chapagain",
    age: 32,
  },
  {
    id: 2,
    name: "G-bob",
    age: 21,
  },
];

// request => post, get, put ,delete
//response => status code

app.get("/artist/list/", (req, res) => {
  res.status(200).send({ message: "success", artist: artistList });
});

app.post("/artist/add/", (req, res) => {
  const artist = req.body;

  artistList.push(artist);
  res.status(201).send({ message: "Artist added success fully." });
});

app.delete("/artist/delete/:id", (req, res) => {
  const userIdToDelete = Number(req.params.id);

  // find user from array
  const artist = artistList.find((item) => {
    return item.id === userIdToDelete;
  });
  // if user not find throw error
  if (!artist) {
    return res.status(404).send({ Message: "Artist Not found" });
  }
  //remove user from array
  const newArray = artistList.filter((item) => {
    return item.id !== userIdToDelete;
  });
  //update array
  artistList = [...newArray];

  //send response
  console.log(userIdToDelete);
  res.status(200).send({ msg: " Artist deleted successful" });

  //   res.status(200).send("deleting ......");
});

// id detail

app.get("/artist/details/:id", (req, res) => {
  const artistId = Number(req.params.id);

  // to filter artist
  const artist = artistList.filter((item) => {
    return item.id === artistId;
  });
  //if artist not find throw error
  if (!artist) {
    return res.status(404).send({ msg: "Artist Not found" });
  }

  res
    .status(200)
    .send({ message: "Artist found successful", artistDetails: artist });
});

//port
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});
