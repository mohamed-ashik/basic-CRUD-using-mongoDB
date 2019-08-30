

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const app =  express();

mongoose.connect("mongodb://localhost:27017/people", {useNewUrlParser : true});

const peopleSchema = new mongoose.Schema({
  name : String,
  password : String
});

const People = new mongoose.model("People", peopleSchema);

const John = new People({
  name : "John",
  password : "74rt8867lo"
});

const Harry = new People({
  name : "Harry",
  password : "poy789gl"
});

const Patrik = new People({
  name : "Patrik",
  password : "blip789@3"
});

// People.insertMany([John, Harry, Patrik], (err)=>{
//   if(err){
//     console.log(err);
//     }
//     else{
//       console.log("3 row affected");
      
//     }
// });

People.find((err, peoples)=>{
  if(err){
    console.log(err); 
  }
  else{
        console.log(peoples);
        
      }
  
});

People.updateOne({name:"Harry"}, {password: "password Changed"}, function(err){
  if(err){
    console.log(err);
     }
     else{
       console.log("Successfully updated");
       
     }
});

People.find((err, peoples)=>{
  if(err){
    console.log(err); 
  }
  else{
        console.log(peoples);
        
      }
  
});


app.listen(3000, ()=>{
  console.log("server started on port 3000");
  
});

