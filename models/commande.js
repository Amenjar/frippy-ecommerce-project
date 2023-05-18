const mongoose = require("mongoose");

const CommandeSchema = new mongoose.Schema({
    address:{type:String,required:true},
    numeroCart:{type:String,required:true},
    prix:{type:String,required:true},
    product:{type:Array,required:true},
    user:{
        type:mongoose.Schema.Types.Object,
        ref:"userSchema",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },

    etat:{type:String,enum:["en attente","confirmer","annuler","en livraison","livrer"],default:"en attente"}



})
module.exports = mongoose.model("Commande",CommandeSchema);