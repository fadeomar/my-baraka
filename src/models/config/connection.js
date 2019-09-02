const { Pool } = require("pg");

require("env2")("config.env");

let dbURL = "postgres://mybaraka:123@localhost:5432/mybaraka";

// if (process.env.NODE_ENV === "production" || process.env.NODE_ENV) {
//   dbURL == process.env.DATABASE_URL;
// } else {
//   dbURL = process.env.DEV_DB_URL;
// }

console.log(dbURL);
const opt = {
  connectionString: dbURL,
  ssl: true
};

module.exports = new Pool(opt);
