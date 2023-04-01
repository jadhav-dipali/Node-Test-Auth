const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Auth")
.then(res=>console.log("connnection Successfully"))
.catch(err=>console.log("not connectes"))