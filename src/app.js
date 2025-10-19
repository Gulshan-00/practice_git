const express= require("express");

const app=express();

app.use("/user",(req,res)=>{
    res.send("user first api hit")
})

app.get("/user",(req,res)=>{
    res.send({firstname:"Gulshan", Lastname:"Kumar"})
})

app.post("/profile",(req,res)=>{
   res.send("Profile is updated")
})

app.delete("/profile",(req,res)=>{
   res.send("User profile is deleted")
})






app.listen(3000,()=>{
    console.log("server is successful running")
});