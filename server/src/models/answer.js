const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    answer_path:{
        type: String,
    },
    answer_s:{
        type: String,
    },
    number:{
        type: Number,
    },
    grade:
        {
            type: String,
        },
});

const Answer = module.exports = mongoose.model('Answer', answerSchema)

