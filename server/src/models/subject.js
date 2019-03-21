const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class"
        }
    ],
    //
    // units:[{
    //     unit_number: {type:Number},
    //     unit_title: {type: String},
    //     unit_body: {type: String}
    // }]
});

const Subject = module.exports = mongoose.model('Subject', subjectSchema)


