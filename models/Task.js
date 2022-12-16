const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'must provide a name'],
        trim : true,
        maxlength : [20,'max is 20 character']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Task',taskSchema);