const express = require("express");
const { posts } = require("./data");
const path = require("path");
const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

// Complete API
app.get("/api/v1", (req, res) => {
  res.json(posts);
});

// API with only few fields to show
app.get("/api/v1/title", (req, res) => {
  const postTitles = posts.map((items) => {
    const { id, userId, title } = items;
    return { id, userId, title };
  });
  res.json(postTitles);
});

// search by ID
app.get("/api/v1/:itemID", (req, res) => {
  const { itemID } = req.params;
  const singleItem = posts.find((item) => item.id === Number(itemID));

  if (!singleItem) {
    return res.status(404).send("Not Found");
  }

  return res.json(singleItem);
});

// search by specific title
app.get("/posts", (req, res) => {
  const { search, limit } = req.query;
  console.log(req.query);
  let filterPosts = [...posts];

  if (search) {
    const searchLowerCase = search.toLowerCase();
    const searchUpperCase = search.toUpperCase();
    filterPosts = filterPosts.filter((post) => {
      const titleLowerCase = post.title.toLowerCase();
      return (
        titleLowerCase.startsWith(searchLowerCase) ||
        titleLowerCase.startsWith(searchUpperCase)
      );
    });
  }

  if (limit) {
    filterPosts = filterPosts.slice(0, limit);
  }

  if (filterPosts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(filterPosts);
});

app.listen(PORT, () => {
  console.log("The server is active on port 3030");
});
