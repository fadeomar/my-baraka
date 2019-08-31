const { query } = require("../config/connection");

const insert = listData => {
  const { name } = listData;
  const sql = {
    text: `INSERT INTO baraka_list (name) VALUES ($1);`,
    VALUES: [name]
  };
  return query(sql);
};

const selectAll = () => {
  const sql = `SELECT * FROM baraka_list;`;
  return query(sql);
};

module.exports = { insert, selectAll };
