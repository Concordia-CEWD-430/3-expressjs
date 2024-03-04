const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-book => GET
router.get("/add-book", adminController.getAddBook);

// /admin/books => GET
router.get("/books", adminController.getBooks);

// /admin/add-book => POST
router.post("/add-book", adminController.postAddBook);

module.exports = router;
