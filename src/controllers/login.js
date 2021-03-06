const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { find } = require("../models/queries/user");

const get = (req, res) => {
  res.render("login");
};

const post = (req, res, next) => {
  const { username, password } = req.body;
  const key = process.env.KEY;
  let id;
  find(username)
    .then(result => {
      id = result.rows[0].id;
      return compare(password, result.rows[0].password);
    })
    .then(result => {
      if (result) {
        const token = sign({ userId: id, username }, key);
        res.cookie("token", token, { maxAge: 50000000 });
        res.redirect("/");
      } else {
        throw Error("username or pass are wrong");
      }
    })
    .catch(next);
};

module.exports = { get, post };
