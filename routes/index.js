let express = require("express");

let routes = express.Router();

let bookroute = require("./book-store.routes");
let productroute = require("./product.routes");
let orderroute = require("./order.routes");


routes.use("/book",bookroute);
routes.use("product",productroute);
routes.use("order",orderroute);


module.exports=routes;