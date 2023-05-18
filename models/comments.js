const mongoose = require("mongoose");



const CommentSchema = new mongoose.Schema({
    body:String,
    rate:Number,
    user:{
        type:mongoose.Schema.Types.Object,
        ref:"userSchema",required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema",required:true
    },
    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductSchema"
    }

})

module.exports = mongoose.model("Comment",CommentSchema);