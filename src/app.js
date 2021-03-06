const express = require("express");
const { join } = require("path");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const router = require("./controllers");

require("env2")("config.env");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(compression());
app.use(cookieParser());

app.disable("x-powered-by");
app.set("port", process.env.PORT || 5000);

app.set("views", join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(join(__dirname, "..", "public")));
app.use(router);

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: join(__dirname, "views", "layouts"),
    partialsDir: join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

module.exports = app;
