const express = require('express')
const router = express.Router()
const {getAllTasks,updateTask,deleteTask,createTask,getTask} = require('../controllers/tasks.js')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
//patch is alternative to put

module.exports = router