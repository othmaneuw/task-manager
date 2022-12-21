const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

//GETTING ALL TASKS
const getAllTasks = asyncWrapper (async (req,res) =>{
        const tasks = await Task.find();
        res.status(200).json({ tasks });
});

const createTask = asyncWrapper( async (req,res) =>{
        const task = await Task.create(req.body);
        res.status(201).json({task});
})

const getOneTask = asyncWrapper (async (req,res) =>{

        const {id:taskID} = req.params;
        const task = await Task.findOne({_id : taskID});
        if(!task) return res.status(404).json({mssg : "Task not Found"});
        res.status(200).json({task});
   
})

const updateTask = asyncWrapper( async (req,res) =>{
    const {id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new : true,
            runValidators : true
        });
        if(!task) return res.status(404).send(`No task with the id ${taskID}`);

        res.status(200).json({taskID , data:task})

})

const deleteTask = asyncWrapper( async (req,res) =>{
        const {id : taskID} = req.params;
        const task = await Task.findOneAndDelete({_id : taskID});
        if(!task) return res.status(404).json({mssg : 'No task Found'});
        res.status(200).json({task});
})

module.exports = {
    getAllTasks,
    createTask,
    getOneTask,
    updateTask,
    deleteTask
}