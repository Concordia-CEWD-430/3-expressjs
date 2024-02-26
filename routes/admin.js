const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const books = [];

router.get("/add-book", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-book.html"));
});

router.post("/add-book", (req, res, next) => {
  books.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.books = books;
