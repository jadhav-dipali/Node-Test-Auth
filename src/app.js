const express = require("express");
const app = express();
require("dotenv").config();
const port=process.env.PORT
require("./db/connection")
const router = require("./router/router")

app.use(express.json())
app.use(router);



app.listen(port,()=>{
    console.log(`listening port ${port}`)
})
