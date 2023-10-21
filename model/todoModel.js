const mongoose = require("mongoose")

//schema 

const todoSchema = mongoose.Schema({
    "title" : String,
    "completed" : String,
    "userId" : String
})


//model

const TodoModel = mongoose.model("todo" , todoSchema)

module.exports = {TodoModel}