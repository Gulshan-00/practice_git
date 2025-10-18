const express= require("express");

const app=express();

app.use("/signup",(req,res)=>{
   res.send("Hello, I am Signup Page")
})

app.use("/profile",(req,res)=>{
   res.send("Hello, I am Profile Page")
})

app.use("/login",(req,res)=>{
   res.send("Hello, I am Login Page")
})

app.use("/",(req,res)=>{
   res.send("Hello, I am Home Page")
})






app.listen(3000,()=>{
    console.log("server is successful running")
});