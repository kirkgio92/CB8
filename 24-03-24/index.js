require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Game = require("./models/games");
const User = require("./models/user");

const app = express();
const db = mongoose.connection;

app.use(express.json());
mongoose.connect(process.env.DATABASE_URL);

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("DB Connection is ====> OK!"));

// Middlware for authentication
const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // console.log("Authorization Header:", authHeader);
  // console.log("Token:", token);

  if (token === null) {
    return res.status(400).json({ message: "Token not provided!!!" });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        // console.error("JWT Verification Error:", err);
        return res.status(403).json({
          message: "You do not have the right permissions to access!",
        });
      }
      req.user = user;
      next();
    });
  }
};

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.post("/register", async (req, res) => {
  try {
    const cryptedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: cryptedPassword,
    });

    const newUser = await user.save();
    res.status(201).json({ message: "User registered!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Registration failed!" });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user === null) {
    return res.status(400).json({ message: "User not found!" });
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({ accessToken });
    }
  } catch (error) {
    // console.error("Login error:", error);
    res.json({ message: "Not authorized!" });
  }
});

// Can be done also via plugin npm install mongoose-paginate
app.get("/games", authToken, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  try {
    const count = await Game.countDocuments();
    const totalPages = Math.ceil(count / limit);

    const games = await Game.find().skip(skip).limit(limit);

    res.json({
      totalPages,
      currentPage: page,
      totalRecords: count,
      games,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/games/:id", authToken, async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/games", async (req, res) => {
  const game = new Game({
    title: req.body.title,
    cover: req.body.cover,
    year: req.body.year,
  });
  try {
    const newGame = await game.save();
    res.status(201).json({ newGame });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/games/:id", async (req, res) => {
  try {
    if (req.params.id === "all") {
      await Game.deleteMany();
      res.status(201).json({ message: "DB wiped out!!!" });
    } else {
      const game = await Game.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "ID deleted!!!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/games/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      res.status(404).json({ message: "ID not found" });
    } else {
      const { title, cover, year } = req.body;
      if (title && cover && year) {
        game.title = title;
        game.cover = cover;
        game.year = year;

        await game.save();
        res.status(201).json({ message: "ID Updated!!!" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000);
