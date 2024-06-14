let express = require("express");
let route = express.Router();
let bookroute = require("./book-store.route");
let productroute = require("./product.route");
let orderroute = require("./order.route");


route.use("/book", bookroute);
route.use("/product", productroute);
route.use("/order", orderroute);


module.exports = route;