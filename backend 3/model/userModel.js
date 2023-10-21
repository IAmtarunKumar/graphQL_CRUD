const mongoose = require("mongoose")

//schema 

const userSchema = mongoose.Schema({
    userId : String,
    name : String,
    email : String,
    phone : String
})


//model

const UserModel = mongoose.model("creator" , userSchema)

module.exports = {UserModel}