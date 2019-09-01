const { verify } = require("jsonwebtoken");
const { list, item } = require("../models/queries");

const addList = (req, res, next) => {
  const { listName } = req.body;
  list
    .insert({ name: listName })
    .then(() => res.redirect("/"))
    .catch(next);
};

const addItem = (req, res, next) => {
  const { listId, content } = req.body;
  const { token } = req.cokkies;
  const key = process.env.KEY;
  if (!token) res.redirect("login");
  const decoded = verify(token, key);
  const { userId } = decoded;
  const itemInfo = { content, isDone, isDone: false, listId, userId };
  item
    .insert(itemInfo)
    .then(() => res.redirect("/"))
    .catch(next);
};

const markDone = (req, res, next) => {
  const { id } = req.body;
  item
    .markDone(id)
    .then(() => res.redirect("/"))
    .catch(next);
};

module.exports = { markDone, addItem, addList };
