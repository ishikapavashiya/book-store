const {productSchema} = require("../model");
const { findOne } = require("../model/book-store.model");


let productAdd = (body) =>{
    return productSchema.create(body);
};

let findByname = (name) =>{
    return productSchema.findOne({name});
};
module.exports = {productAdd,findByname};