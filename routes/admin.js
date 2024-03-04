const express = require("express");

const booksController = require("../controllers/books");

const router = express.Router();

router.get("/add-book", booksController.getAddBook);
router.post("/add-book", booksController.postAddBook);

module.exports = router;
