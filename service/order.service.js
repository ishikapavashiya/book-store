const {orderSchema} = require("../model");

let createorder = (body) =>{
    return orderSchema.create(body);
};

let getordre = () =>{
    return orderSchema.find().populate("productname").populate("username");
};
module.exports = { createorder,getordre};