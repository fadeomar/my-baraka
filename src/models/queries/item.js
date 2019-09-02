const connection = require("../config/connection");

const selectAll = () => {
  const sql = `SELECT * FROM baraka_item;`;
  return connection.query(sql);
};

const insert = itemData => {
  const { content, isDone, listId, userId } = itemData;
  const sql = {
    text: `INSERT INTO baraka_item (content, is_done, list_id, user_id) VALUES ($1,$2,$3,$4);`,
    values: [content, isDone, listId, userId]
  };
  return connection.query(sql);
};

const doneKey = id => {
  const sql = {
    text: `UPDATE baraka_item SET is_done = true where id =$1;`,
    values: [id]
  };
  return connection.query(sql);
};

const getItmesOwners = () => {
  const sql = `SELECT baraka_item.id, content, is_done, list_id, baraka_user.username from baraka_item INNER JOIN baraka_user ON baraka_user.id = baraka_item.user_id;`;
  return connection.query(sql);
};

module.exports = { getItmesOwners, insert, selectAll, doneKey };
