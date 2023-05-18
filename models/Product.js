const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name:String,
    picture:String,
    price:String,
    taille:String,
    exist:{type:Boolean, default:true},
    commander:{type:Boolean, default:false},
    wishListProduct:{type:String,enum:["true","false"], default:"false"},
    cart:{type:Boolean,default:false},
    genre:{type:String,enum:['Man','Women']},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    }


})
module.exports = mongoose.model('Product',productSchema);