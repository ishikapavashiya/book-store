const { bookservice } = require("../service")
const sendEmail = require("../service/email.service");

let register = async (req, res) => {
    try {
        console.log(req.body);

        let body = req.body;

        let book = await bookservice.register(body);
        console.log(book);
        //email service

    // if (user) {
    //   let result = await sendEmail(
    //     user.email,
    //     "this is test mail",
    //     `welcome ${user.email}`
    //   );
    //   console.log(result);
    // }
    // console.log(user, "res");
        res.status(201).json({
            message: "book regiter sucessfully",
            book,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
// get
let getAlluser = async (req, res) => {
    let users = await bookservice.findAlluser();
    res.status(200).json({
        message: "get All user sucess",
        users,
    });
};
// delete
let deleteuser = async (req, res) => {
    console.log(req.params);

    let = { id } = req.params;

    let users = await bookservice.deleteuser(id);

    console.log(users);

    res.status(200).json({
        message: "user delete sucess", users
    });
};

let updateUser = async (req, res) => {
    let body = req.body;
    let { id } = req.params;

    let result = await userService.updateUser(id, body);

    res.status(200).json({
        message: "user updated sucess",
        result,
    });
};
//   login 

let login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await bookservice.finduser(email);
        console.log(user, "result");

        if (!user) {
            throw new error("user not found!");
        }
        if (user.password != password) {
            throw new error("password invlid");
        }
        res.status(200).json({
            message: "loginsucessfully", user,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
module.exports = { register, getAlluser, deleteuser, updateUser, login,sendEmail };