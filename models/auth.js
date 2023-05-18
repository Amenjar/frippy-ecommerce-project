const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String,required:true},
    cin:{type:String,unique:true},
    email:{type:String,required:true,unique:true},
    picture:String,
    phone:String,
    demande:{type:String,enum:['accepter','non accepter'],default:'accepter'},
    password:{type:String,required:true},
    role:{type:String,enum:['admin','user','livreur'],default:'user'}
})
module.exports = mongoose.model('User', userSchema);
