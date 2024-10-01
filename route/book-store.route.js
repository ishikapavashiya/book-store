let express = require("express");
const { bookcontroller } = require("../controller");
const validate = require("../middleware/validate");
const { bookvalidation } = require("../validations");
const { islogin } = require("../middleware/auth");
let route = express.Router();

route.post("/register", validate(bookvalidation.user), bookcontroller.register);
route.get("/get", islogin, bookcontroller.getAlluser);
route.delete("/deleteuser/:id", bookcontroller.deleteuser);
route.put("/updata/:id", validate(bookvalidation.user), bookcontroller.updateUser)

// login

route.post("/login", validate(bookvalidation.user), bookcontroller.login);
route.get("/profile",islogin, bookcontroller.Profile)
module.exports = route; 