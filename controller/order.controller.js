const {orderservice} = require("../service");

let createorder=async(req,res)=>{
    let body = req.body;
    console.log(body);


    let order=await orderservice.createorder(body);


    res.status(201).json({
        message:"order created successfully",order,    
    });
};

let getordre = async(req,res)=>{
    let order = await orderservice.getordre();


    res.status(200).json({
         message:"order creadted successfully",order,
    });
};
module.exports = {createorder, getordre};   