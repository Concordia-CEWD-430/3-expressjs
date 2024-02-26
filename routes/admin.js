const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const books = [];

router.get("/add-book", (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book",
    path: "/admin/add-book",
  });
});

router.post("/add-book", (req, res, next) => {
  books.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.books = books;
