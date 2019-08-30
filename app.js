//Requiring external modules
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//connecting mongodb database
mongoose.connect("mongodb://localhost:27017/CarDB", {useNewUrlParser:true});

//creating mongoose schema
const carSchema = new mongoose.Schema({
    name     : String,
    engine   : String,
    fuelType : String,
    maxSpeed : String,
    price    : String
});

//creating mongoose model
Car = new mongoose.model("Car", carSchema);

//insertmany operation
const Lambo = new Car({
    name     : "Lamborgini Avendator",
    engine   : "V12 Petrol Engine",
    milage   : "3.22 kmpl",
    maxSpeed : "351 kmph" ,
    turboBoost :  true
});

const JeepCompass = new Car({
    name     : "Jeep Compass",
    engine   : "1956 cc",
    milage   : "17.1 kmpl",
    maxSpeed : "180 kmph",
    turboBoost : false
});

const BugattiChiron = new Car({
    name     : "Bugatti Chiron",
    engine   : "7993 cc",
    milage   : "5.95 kmpl",
    maxSpeed : "392 kmph" ,
    turboBoost : true
});

Car.insertMany([Lambo, JeepCompass, BugattiChiron], (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully row affected");    
    }
});

//reading inserted data(all)
Car.find((err, allCars)=>{
    if(!err){
        console.log(allCars);
        }
});

//reading specific data
Car.find({name: "Jeep Compass"}, (err, car)=>{
    if(!err){
        console.log(car);
        
    }
});

updating specific car data
Car.updateOne({name:"Jeep Compass"}, {maxSpeed :"192 kmph"}, (err)=>{
    if(!err){
        console.log("sucessfully updated a single data");
        
    }
});

//Iterating through specific key values(car names)
Car.find((err, allCars)=>{
    if(!err){
        allCars.forEach(element => {
            console.log(element.name);
        });
    }   
}); 
        
//deleting particular key value in document

Car.deleteOne({name: "Jeep Compass"}, (err)=>{
    if(!err){
        console.log("successfully deleted Jeep Compass car");
        
    }
});

//deleting multiple key values accoring to some conditions
Car.deleteMany({turboBoost: true}, (err)=>{
    if(!err){
        console.log("Successfully deleted two items");
        
    }
});

// //deleting collection
// mongoose.connection.Car.dropCollection('Car');

// //deleting database
// mongoose.connection.Car.dropDatabase('Car');