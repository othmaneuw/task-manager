const Task = require('../models/Task');
const getAllTasks = (req,res) =>{
    res.send('All Tasks');
}

const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }catch(err){
        res.status(500).json({message : err});
    }
}

const getOneTask = (req,res) =>{
    res.json({ id : req.params.id });
}

const updateTask = (req,res) =>{
    res.send('update Task');
}

const deleteTask = (req,res) =>{
    res.send('delete Task');
}

module.exports = {
    getAllTasks,
    createTask,
    getOneTask,
    updateTask,
    deleteTask
}