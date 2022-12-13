const { response } = require("express");
const {Todo} = require("./models");


const getAllTodos = async (request , response)=> {
    var _id = request.query.id1;
    if(_id){
        var allTodos = await Todo.findById(_id);
    }
    else{
        var allTodos = await Todo.find();
    }

    
    return response.json(allTodos);
};

const createTodo =async (request, response) => {
    console.log(request.body);
    await Todo.create(request.body); //Creating New Todo in Database
    return response.json({ status: "Creation Done" });
};

const updateTodo =async (request , response) =>{
    // await Student.updateOne(request.body);
    var _id = request.query.id1;
    var data = request.body;
    console.log(_id , data);
    await Todo.findByIdAndUpdate(_id , data);

    return response.json({status: "Updation Done"});
};

const deleteTodo = async (request , response) =>{
    var _id = request.query.id1;
    //var data = request.body;
    console.log(_id);
    await Todo.findByIdAndDelete(_id);

    return response.json({status: "Deletion Done"});
};

const patchTodo =async (request , response) =>{
    // await Student.updateOne(request.body);
    var _id = request.query.id1;
    var data = request.body;
    console.log(_id , data);
    await Todo.findByIdAndUpdate(_id , data);

    return response.json({status: "Patching Done"});
};


module.exports = { getAllTodos , createTodo , updateTodo , deleteTodo , patchTodo};


