const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const practiceSchema = new Schema({
    title:{
        type: String,
    },
    link:{
        type: String,
    },
    number:{
        type: Number,
    },
    question:{
        type: String,
    },
    path:{
        type: String,
    },
});

const Practice = module.exports = mongoose.model('Practice', practiceSchema)

