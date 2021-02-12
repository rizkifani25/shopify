const express = require("express");
const router = express.Router();

const shopee = require("../../controllers/shopee");

router.post("/", shopee.searchProduct);

module.exports = router;
