const mongoose = require("mongoose")

const user = new mongoose.Schema({
    username: String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
});
module.exports= mongoose.model('user', user);