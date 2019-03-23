const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const learnSchema = new Schema({
    title:{
        type: String,
    },
    link:{
        type: String,
    },
    description:{
        type: String,
    },
    number:{
        type: Number,
    },
    path:{
        type: String,
    },
});

const Learn = module.exports = mongoose.model('Learn', learnSchema)

