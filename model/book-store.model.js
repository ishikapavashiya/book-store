let mongoose = require("mongoose");

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
        required: true
      },
      pages: {
        type: Number,
        required: true
      },
      publishedDate: {
        type: Date,
        required: true
      },
      language:{
        type:String,
        require:true,
      },

});
let book = mongoose.model("book", bookSchema)
module.exports=book;