const { hash } = require("bcrypt");

const { sginupV, errorFeedback } = require("../validation");
const { find, insert } = require("../models/queries/user");

const get = (req, res) => {
  res.render("sginup", { title: "Sgin Up" });
};

const post = (req, res, next) => {
  const { email, username, password, confirmPassword } = req.body;
  sginupV({ email, username, password, confirmPassword })
    .then(() => find(username))
    .then(result => {
      if (result.rows.length !== 0) {
        throw Error("this username are already exists");
      } else {
        return result;
      }
    })
    .catch(err => next(err))
    .then(() => hash(password, 10))
    .then(hased => insert({ email, username, password: hased }))
    .then(() => res.redirect("/login"))
    .catch(err => {
      if (err.isJoi) res.send(errorFeedback(err.details[0].type));
      else if (err.massage === "this username are already exists")
        res.send(errorFeedback(err.massage));
      else next(err);
    });
};

module.exports = { get, post };
