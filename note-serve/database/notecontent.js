const mongoose = require("mongoose")

var notecontent = new mongoose.Schema({
    title:String,
    name:String,
    time:FormData,
    content:String,
    data:{
        timestamp:{
            updateAT:"updfataTime",
            createAT:"createTime"
        }
    }
})

module.exports= mongoose.model('notecontent', notecontent);