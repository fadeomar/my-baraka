const { join } = require("path");
const { readFileSync } = require("fs");

const connection = require("./connection");

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "db_build.sql")).toString();
  const fakeData = readFileSync(join(__dirname, "fake_data.sql")).toString();
  return connection.query(sql).then(result => {
    if (process.env.NODE_ENV === "test") return connection.query(fakeData);
    return result;
  });
};
// dbBuild()
//   .then(() => connection.query(`SELECT * FROM baraka_user;`))
//   .then(console.log);
module.exports = dbBuild;
