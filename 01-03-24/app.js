const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const quotes = require("./quotes");
const app = express();
const port = 5000;

function getNextID() {
  const lastID = quotes.length > 0 ? quotes[quotes.length - 1].id : 0;
  return lastID + 1;
}

app.use(express.static("./public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/api/data", (req, res) => {
  res.json(quotes);
});

app.get("/quotes", (req, res) => {
  // REVERSING THE ARRAY OF THE APY
  const reversedQuotes = quotes.slice().reverse();

  // THIS IS RENDERING THE ARRAY IN REVERSE - SO THE LAST ID IS ALWAYS ON TOP
  res.render("quotes", { data: reversedQuotes });
});

app.get("/form", (req, res) => {
  // REVERSING THE ARRAY OF THE APY (same as above)
  const reversedQuotes = quotes.slice().reverse();
  res.render("form", { data: reversedQuotes });
});

app.post("/form", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    return res.status(400).json({ success: false, msg: "Wrong data typed" });
  }

  const newQuote = {
    id: getNextID(),
    quote: quote,
    author: author,
  };

  quotes.push(newQuote);

  // THIS RETURN A JSON FILE WITH ONLY THE NEW POSTED QUOTE
  // return res.status(201).json({
  //   success: true,
  //   data: newQuote,
  // });

  // THIS RETURN THE QUOTE PAGE WITH ONLY THE LAST POSTED QUOTE
  // res.render("quotes", { data: [newQuote] });

  // THE FOLLOWING IS RENDERING THE ENTIRE ARRAY, BUT REVERSED SO THAT THE LAST POST CAN BE SEEN ON TOP
  // REVERSING THE ARRAY OF THE APY ALSO HERE, BECAUSE CAN NOT ACCESS THE ABOVE ONE
  const reversedQuotes = quotes.slice().reverse();
  res.render("form", { data: reversedQuotes });
});

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
