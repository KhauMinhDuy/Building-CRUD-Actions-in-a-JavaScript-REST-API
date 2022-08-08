const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile("read.html", { root: "views" });
});
router.get("/read", function (req, res) {
  res.sendFile("read.html", { root: "views" });
});

router.get("/search", function (req, res, next) {
  res.sendFile("search.html", { root: "views" });
});

router.get("/create", function (req, res) {
  res.sendFile("create.html", { root: "views" });
});

router.get("/update", function (req, res) {
  res.sendFile("update.html", { root: "views" });
});

router.get("/delete", function (req, res) {
  res.sendFile("delete.html", { root: "views" });
});

module.exports = router;
