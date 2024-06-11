let express = require("express");
const {productcontroller} =require("../controller");
let route = express.Router();

route.post("/add",productcontroller.productAdd);

module.exports = route;