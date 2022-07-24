const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name cannot be Empty'],
        //validated the name of task to be there 
        trim:true,
        maxlength:[20,'name cannot exceed further']
    },
    completed:{
        type:Boolean,
        default:false // this is not required as it is set as false by default
    }
}) // structure the data (only these types of inputs are allowed)

//model providdes an interface to the database helps in doing CRUD operations in database
module.exports = mongoose.model('Task',taskSchema);
//an instance of a model is document