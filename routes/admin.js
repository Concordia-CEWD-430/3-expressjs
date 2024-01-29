const express = require("express");

const router = express.Router();

router.get("/add-book", (req, res, next) => {
  res.send(
    "<form action='/book' method='POST'><input type='text' name='title'><button type='submit'>Add Book</button></form>"
  );
});

router.post("/book", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
