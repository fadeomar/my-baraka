const { join } = require("path");
const { readFileSync } = require("fs");

const { query } = require("./connection");

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "db_build.sql")).toString();
  const fakeData = readFileSync(join(__dirname, "fake_data.sql")).toString();
  return query(sql).then(result => {
    if (process.env.NODE_ENV === "test") return query(fakeData);
    return result;
  });
};
module.exports = dbBuild;
