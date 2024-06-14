let jwt = require("jsonwebtoken");

let createtoken = (data)=>{
    console.log(data,"jwt");

    let token = jwt.sign(data,process.env.SECRET);
    return token;
};
module.exports = { createtoken};