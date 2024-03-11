const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/books", shopController.getBooks);

router.get("/books/:id", shopController.getBook);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.addToCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
