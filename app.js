const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const endpoint = require("./api/assets/endpoint");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const tokpedSearch = require("./api/routes/tokopedia/search");
const shopeeSearch = require("./api/routes/shopee/search");
const bukalapakSearch = require("./api/routes/bukalapak/search");
const mainSearch = require("./api/routes/main");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(endpoint.TOKOPEDIA_SEARCH_PRODUCT, tokpedSearch);
app.use(endpoint.SHOPEE_SEARCH_PRODUCT, shopeeSearch);
app.use(endpoint.BUKALAPAK_SEARCH_PRODUCT, bukalapakSearch);
app.use(endpoint.MAIN_SEARCH_PRODUCT, mainSearch);

module.exports = app;
