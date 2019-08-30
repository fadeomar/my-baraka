const { Pool } = require("pg");

require("env2")("config.env");

let dbURL = "";

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV) {
  dbURL == process.env.DATABASE_URL;
} else {
  dbURL = process.env.DEV_DB_URL;
}

const opt = {
  connectionString: dbURL,
  ssl: true
};

module.exports = new Pool(opt);
