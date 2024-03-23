const express =require('express');
const cors = require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const User = require('./resto.model');

const app=express();
app.use(cors());
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://anandakj2019:PqVtr6jXxWWbiVV4@cluster0.lryo4sh.mongodb.net/restobase?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('connect to database');
})
 
app.get('/hi',(req, res)=>{
    console.log("request received")

    res.json('Hello World!')
})

app.get("/users",async(req,res)=>{
    console.log("request");
    let data=await User.find().catch(err=>{
        res.json("error loading data");
    });
    res.json(data);
});
app.get('/users/:id',async(req,res)=>{
    let id=req.params.id;
    let data=await User.findById(id).catch(err=>{
        res.json("error finding");
    });
    if(!data){
        res.json('not found');
    }
    else{
        res.json(data);
    }
});
app.delete('/users/:id',async(req,res)=>{
    let id=req.params.id;
    await User.findByIdAndDelete(id)
    .then(()=>{
        res.json('deleted successfully');
    })
    .catch(err=>{
        res.json("error in deleting");
    });

});
// app.get("/user",(req,res)=>{
//     console.log("user request");
//     res.json([
//         {fname:"ananda",lname:"k",email:"a@gmail.com",password:"123"},
//         {fname:"nandana",lname:"c",email:"n@gmail.com",password:"345"},
//     ])
// })
app.post("/users",async(req,res)=>{
    try {
        const users =await User.create(req.body)
        res.json({message:'User created',users})

        
    } catch (error) {
        console.log(error)
    }
    
});
 app.listen(4000,()=>{
 console.log("started server on 4000");
 });
