const { bookSchema } = require("../model");

let register = (body) => {
    console.log(body, "service");

    return bookSchema.create(body);
};
// get
let findAlluser = () => {
    return bookSchema.find();
};
let finduser = (email)=>{
    return bookSchema.findOne({email})
}
// delete
let deleteuser = (id) => {
    return bookSchema.findByIdAndDelete(id);
}
let updateUser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body);
};
module.exports = { register, findAlluser, deleteuser, updateUser,finduser };