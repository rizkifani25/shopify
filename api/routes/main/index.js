const express = require("express");
const router = express.Router();

const main = require("../../controllers/main");

router.post("/", main.searchProduct);

module.exports = router;
