const Task = require("../models/Task.js");
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async (req, res) => {
    const task = await Task.find({});
    res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  //anything passed as name in body will be returned in json format
});

const getTask = asyncWrapper(async (req, res) => {  
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    res.status(200).json({ task });
    if (!task) {
      return res.status(404).json("msg:'No Task with this ID");
    }
  

  // res.send('Gettig single task');
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json("msg:'No Task with this ID");
    }
    // req.status(200).json({task})
    req.status(200).send();
  
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    }); // adding validators here as this was accepting null updations also
    res.status(200).json({ id: taskID, data: req.body });   
    if (!task) {
      return res.status(404).json("msg:'No Task with this ID");
    }
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
