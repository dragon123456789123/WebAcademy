const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    l_title:{
        type: String,
    },
    l_link:{
        type: String,
    },
    p_title:{
        type: String,
    },
    p_link:{
        type: String,
    },
    p_ex_path:{
        type: String,
        answer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Answer"
        },
    }

    // units:[{
    //     unit_number: {type:Number},
    //     unit_title: {type: String},
    //     unit_body: {type: String}
    // }]
});

const Part = module.exports = mongoose.model('Part', partSchema)

