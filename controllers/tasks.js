const Task = require('../models/Task');

//GETTING ALL TASKS
const getAllTasks = async (req,res) =>{
    try{
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    }catch(err){
        res.status(500).json({err})
    }
}

const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch(err){
        res.status(500).json({message : err});
    }
}

const getOneTask = async (req,res) =>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id : taskID});
        if(!task) return res.status(404).json({mssg : "Task not Found"});
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({err});
    }
}

const updateTask = async (req,res) =>{
    const {id:taskID} = req.params;
    try{
        const task = await Task.findByIdAndUpdate({_id : taskID},req.body,{
            new : true,
            runValidators : true
        });
        if(!task) return res.status(404).send(`No task with the id ${taskID}`);

        res.status(200).json({taskID , data:task})

    }catch(err){
        res.status(500).json({err});
    }
}

const deleteTask = async (req,res) =>{
    try{
        const {id : taskID} = req.params;
        const task = await Task.findOneAndDelete({_id : taskID});
        if(!task) return res.status(404).json({mssg : 'No task Found'});
        res.status(200).json({task});
    }catch(err){
         res.status(500).json({err});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getOneTask,
    updateTask,
    deleteTask
}