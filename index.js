const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todoapi");
mongoose.connection.on("connected",()=>{
    console.log("DB Connected");
})
mongoose.connection.on("error",()=>{
    console.log("DB Connection Failed");
})

const {createTodo,getTodo,updateDetails,updateStatus,deleteTodo} = require("./src/controllers/controller");

server.use(cors());
server.use(bodyParser.json());
server.get("/getData",getTodo);
server.post("/create-new-todo",createTodo);
server.put("/update-todo",updateDetails);
server.put("/update-status-todo",updateStatus);
server.delete("/delete-todo",deleteTodo);


server.listen(4000,()=>{
    console.log("Server started at port 4000");
})