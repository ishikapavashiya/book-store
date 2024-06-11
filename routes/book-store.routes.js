let express = require("express");
const { bookcontroller } = require("../controller");
const validate = require("../middleware/validate");
const {bookvalidation} = require("../validations");

let route = express.Router();

route.post("/register", validate(bookvalidation.user), bookcontroller.register);
route.get("/get", bookcontroller.getAlluser);
route.delete("/deleteuser/:id", bookcontroller.deleteuser);
route.put("/updata/:id", validate(bookvalidation.user), bookcontroller.updateUser)

// login

route.post("/login", validate(bookvalidation.user), bookcontroller.login);
module.exports = route;