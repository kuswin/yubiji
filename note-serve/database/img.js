const mongoose = require("mongoose")

var img = new mongoose.Schema({
    image:{
        type:String
    },
    imgtitle:{
        type:String
    }
})

module.exports= mongoose.model('img', img);