const express = require("express");
const router = express.Router();

const tokopedia = require("../../controllers/tokopedia");

router.post("/", tokopedia.searchProduct);

module.exports = router;
