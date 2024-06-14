mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    price:{
        type: Number,
        require:true,
    },
    author: {
        type: String,
        require: true
      },
      pages: {
        type: Number,
        require: true
      },
      publishedDate: {
        type: Date,
        require: true
      },
      language:{
        type:String,
        require:true,
      },

});
let book = mongoose.model("book", bookSchema)
module.exports=book;