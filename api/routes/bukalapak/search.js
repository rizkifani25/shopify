const express = require("express");
const router = express.Router();

const bukalapak = require("../../controllers/bukalapak");

router.post("/", bukalapak.searchProduct);

module.exports = router;
