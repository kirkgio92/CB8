const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./authorization");
const app = express();
const port = 3070;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.get("/dashboard", auth, (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.post("/mostra-dati", (req, res) => {
  console.log(req.body);
  const { nome } = req.body;
  const { cognome } = req.body;
  const { gioco } = req.body;

  if (nome && cognome && gioco) {
    return res
      .status(200)
      .send(
        `Benvenuto ${nome} ${cognome} e il tuo gioco preferito e' ${gioco}`
      );
  }
  res.status(400).send(`Perfavore compila il form`);
});

app.listen(port, () => {
  console.log("server open");
});
