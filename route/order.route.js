let express = require("express");
const { ordercontroller } = require("../controller");
let route = express.Router();

route.post("/create",ordercontroller.createorder);
route.get("/get", ordercontroller.getordre);

module.exports = route;