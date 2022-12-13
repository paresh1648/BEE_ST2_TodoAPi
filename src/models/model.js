const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        Work:String,
        Points:String,
        isCompleted:Boolean
    }
);

const toDoList = mongoose.model("To Do List", todoSchema);

module.exports = {toDoList};