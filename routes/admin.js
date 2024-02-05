const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/add-book", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-book.html"));
});

router.post("/add-book", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
