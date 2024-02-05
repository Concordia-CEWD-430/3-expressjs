const express = require("express");

const router = express.Router();

router.get("/add-book", (req, res, next) => {
  res.send("<form action='/admin/add-book' method='POST'><input type='text' name='title'><button type='submit'>Add Book</button></form>");
});

router.post("/add-book", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
