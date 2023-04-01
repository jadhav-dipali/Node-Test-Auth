const mongoose = require("mongoose");

const SchemaSignup = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true, 
    },
    password:{
        type:String,
        require:true,
    }
})

const Details = new mongoose.model("RegisterDetail" , SchemaSignup)

module.exports= Details