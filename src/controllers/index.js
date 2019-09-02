const router = require("express").Router();

const home = require("./home");
const login = require("./login");
const logout = require("./logout");
const sginup = require("./sginup");
const { clint, server } = require("./error");
const { addItem, addList, markDone } = require("./postData");

router.get("/", home);

router.get("/login", login.get);
router.get("/logout", logout);
router.get("/signup", sginup.get);

router.post("/login", login.post);
router.post("/signup", sginup.post);

router.post("/addList", addList);
router.post("/addItem", addItem);
router.post("/markDone", markDone);

router.all("*", clint);
router.use(server);

module.exports = router;
