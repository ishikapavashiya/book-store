let mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
  productName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productSchema",
  },
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  date: {
    type: String,
    require: true,
  },
});

let order = mongoose.model("orderSchema", orderSchema);
module.exports = order;