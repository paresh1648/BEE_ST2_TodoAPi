
const {toDoList} = require("../models/model");

const createTodo = async (request,response)=>{
    await toDoList.create(request.body);
    return response.json({data: "Todo Created"});
};

const getTodo = async (request,response)=>{
    var id = request.query.id;
    if(id){
        var allTodos = await toDoList.findById(id);
    }else{
        var allTodos = await toDoList.find();
    }
    return response.json(allTodos);
};

const updateDetails = async (request,response)=>{
    var id = request.query.id;
    await toDoList.findByIdAndUpdate(id,request.body);
    return response.json({data: "toDo Details Updated"});
};

const updateStatus = async (request,response)=>{
    var id = request.query.id;
    await toDoList.findByIdAndUpdate(id,request.body);
    return response.json({data: "toDo Status Updated"});
};

const deleteTodo = async (request,response)=>{
    var id = request.query.id;
    await toDoList.findByIdAndDelete(id);
    return response.json({data: "toDo Deleted"});
};

module.exports = {createTodo,getTodo,updateDetails,updateStatus,deleteTodo};