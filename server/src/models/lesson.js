const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    number:{
        type: Number,
    },
    parts_learn: [
        {
            part_number: {type:Number},
            part_title: {type: String},
            part_body: {type: String}
        }
    ],
    parts_practice: [
        {
            part_number: {type:Number},
            part_title: {type: String},
            part_body: {type: String}
        }
    ],
    // units:[{
    //     unit_number: {type:Number},
    //     unit_title: {type: String},
    //     unit_body: {type: String}
    // }]
});

const Lesson = module.exports = mongoose.model('Lesson', lessonSchema)

module.exports.getLessons = function(callback, limit){
    Lesson.find(callback).limit(limit);
}

module.exports.getLessonById = function(id, callback){
    Lesson.findById(id, callback)
}