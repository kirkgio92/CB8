const express = require("express");
const app = express();
const PORT = 3000;

let games = [
  {
    id: 1,
    title: "Metal Gear solid 3 - Snake Eater",
    year: 2005,
    poster:
      "https://image.api.playstation.com/vulcan/ap/rnd/202310/1313/422f8e9282429854db0db4d9ec1e3d0ee9f56418043770f3.jpg",
  },
  {
    id: 2,
    title: "Red Dead Redemption II",
    year: 2018,
    poster:
      "https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270",
  },
  {
    id: 3,
    title: "The Last of Us",
    year: 2013,
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/The_Last_of_Us_TV_logo.svg",
  },
];

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("<h1>Homepage</h1>");
});

app.get("/api/games", (req, res, next) => {
  let sortedGames = [...games]; // Create a new array, so that the original one is not affected
  const sortBy = req.query.sortBy; // Creating the query that specify the type of sorting
  const sortOrder = req.query.sortOrder; // Order of sorting

  if (sortBy && sortOrder) {
    sortedGames.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else if (sortOrder === "desc") {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  res.json(sortedGames);
});

app.post("/api/games", (req, res, next) => {
  const body = req.body;
  if (body.id && body.title && body.year && body.poster) {
    games.push(body);
    res.status(201).send("Push Successful");
  } else {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/api/games/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const game = games.filter((game) => game.id === id);
  if (game.length > 0) {
    games = games.filter((game) => game.id !== id);
    res.status(201).send("Delete Successful");
  } else {
    res.status(401).send("Something went wrong");
  }
});

app.put("/api/games/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = games.findIndex((game) => game.id === id);

  if (index === -1) {
    res.status(400).send("ID was not found");
  } else {
    games[index] = body;
    res.send("Changes made");
  }
});

app.listen(PORT, () => {
  console.log("Server Active");
});
