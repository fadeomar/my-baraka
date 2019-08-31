const { query } = require("../config/connection");

const selectaAll = () => {
  const sql = `SELECT * FROM baraka_item`;
  return query(sql);
};

const isert = itemData => {
  const { content, isDone, listId, userId } = itemData;
  const sql = {
    text: `INSERT INTO baraka_item (content, is_done, list_id, user_id)`,
    values: [content, isDone, listId, userId]
  };
  return query(sql);
};

const doneKey = id => {
  const sql = {
    text: `UPDATE baraka_item SET is_done = true where id =$1`,
    values: [id]
  };
  return query(sql);
};

const getItmesOwners = () => {
  const sql = `SELECT baraka_item.id, content, is_done, baraka_user.username from baraka_item INNER JOIN baraka_user ON baraka_user.id = baraka_item.user_id;`;
  return query(sql);
};