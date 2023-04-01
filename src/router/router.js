const express = require("express");
const bcrypt = require("bcrypt");
const Details = require("../model/signupSchema");
const jwt = require("jsonwebtoken")
const SECRATE_KEY ="hellohiieveryone"

const router = new express.Router();



router.post("/auth/signup",async(req,res)=>{
    try{
      const strongPass = await bcrypt.hash(req.body.password , 10);
      const data = new Details({
        name:req.body.name,
        email:req.body.email,
        password:strongPass
      })
      const createData =  await data.save();
      res.send(createData);
    }catch(err){
        res.status(400).send(err.message);
    }
})



router.get("/auth/signup",async(req,res)=>{
    try{
        res.send("hello")
    }catch(err){
        res.status(400).send(err.message)
    }
})


router.post("/auth/login" , async(req,res)=>{
    try{
       let user= await Details.findOne({email:req.body.email});
       if(user){
        let matchPass= await bcrypt.compare( req.body.password,user.password )
        if(matchPass){
            const token1 = await  jwt.sign({_id:user._id} , SECRATE_KEY);
            res.send({message:"token created Success" , token:token1});
        }else{
            res.status(400).send({message:"details not match"})
        }
       }else{
        res.status(400).send({message:"details not match"})
       }
    }catch(err){
        res.status(400).send(err.message)
    }
})





module.exports = router