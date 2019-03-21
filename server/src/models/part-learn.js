const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const learnSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    number:{
        type: Number,
    },
    link:{
        type: String,
    },

    // units:[{
    //     unit_number: {type:Number},
    //     unit_title: {type: String},
    //     unit_body: {type: String}
    // }]
});

const Learn = module.exports = mongoose.model('Learn', learnSchema)

