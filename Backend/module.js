const mongoose = require("mongoose")

const imgschema = mongoose.Schema({
    name : {type:Array},
    email : {type:String,require:true},
    passwordHash:{type:String,require:true},
    images:{type:Array},
    time:{type:String}
})

exports.Img = mongoose.model("fimg",imgschema)