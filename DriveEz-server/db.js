const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB(){

    mongoose.connect("mongodb+srv://Driveez:Mymongodb%401@rootcluster.jyhvnxq.mongodb.net/" , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose