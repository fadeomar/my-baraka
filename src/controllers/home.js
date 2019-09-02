const { item, list } = require("../models/queries");

const format = require("../helpers");
const { verify } = require("jsonwebtoken");
const home = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.redirect("/login");
  } else {
    const { username, userId } = verify(token, process.env.KEY);
    if (userId) {
      Promise.all([list.selectAll(), item.getItmesOwners()])
        .then(result => [result[0].rows, result[1].rows])
        .then(result => format(...result))
        .then(result =>
          res.render("home", { title: `my Baraka`, result, username })
        )
        .catch(next);
    }
  }
};

module.exports = home;
