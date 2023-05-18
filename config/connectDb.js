const mongoose = require('mongoose');

const ConnectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FREELANCE");
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(`MongoDB is not Connected... : ${error}`);
    }

}
module.exports = ConnectDB;