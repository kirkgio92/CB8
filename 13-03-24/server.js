const express = require("express");
const router = require("./routes/root");
const port = 3000;
const app = express();

app.use(router);

app.listen(port, () => {
  console.log("Server active");
});
