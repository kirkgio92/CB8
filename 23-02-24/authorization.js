const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "giovanni") {
    req.user = { name: "giovanni" };
    next();
  } else {
    res.status(401).send(`L'utente ${user} non e' autorizzato`);
  }
};

module.exports = authorize;
