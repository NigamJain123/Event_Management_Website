const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const UserModel=require("./models/users");
require("./db/conn");

const app=express();
app.use(express.json());
// app.use(express.urlencoded({extended:false}))
app.use(cors({ 
    origin:["http://localhost:5173"],
    method:["GET","POST"],
    credentials: true
}));
app.use(cookieParser());

// mongoose.connect("mongodb://127.0.0.1:27017/userdb")
// .then(()=>{console.log("Connection Established")})
// .catch((err)=>{console.log(err)})

app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password,10)
    .then(hash => {
        UserModel.create({name,email,password:hash})
        .then(user=>res.json("Success"))
        .catch(err=>res.json(err));
    })
    .catch(err => res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password ,(err,response)=>{
                if(response){
                    const token=jwt.sign({email:user.email ,role:user.role},
                        "jwt-secret-key",{expiresIn:"1d"})
                    res.cookie("token", token,);
                    return res.json("Success");
                }
                else{
                    return res.json("This password is incorrect");
                }
            })
        }
        else{
            return res.json("No such record exist");
        }
    })
})

app.post("/eventregisteration",async(req,res)=>{
    const {name,email,password} = req.body;
    const registered=await userData.save();
    
})

app.listen(8000,()=>{
    console.log("Server Running on port 8000");
})