const { query } = require("../config/connection");
const insert = userData => {
  const { username, password, email } = userData;
  const sql = {
    text: `INSERT INTO baraka_user (username, password, email) VALUES ($1, $2, $3);`,
    values: [username, password, email]
  };
  return query(sql);
};

const selectAll = () => {
  const sql = `SELECT * form baraka_user;`;
  return query(sql);
};

const find = username => {
  const sql = {
    text: `SELECT * FROM baraka_user EHERE baraka_user.username LIKE $1;`,
    values: [username]
  };
  return query(sql);
};

module.exports = { selectAll, insert, find };
