const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    number:{
        type: Number,
    },
    lessons: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lesson"
        }
    ],
    // units:[{
    //     unit_number: {type:Number},
    //     unit_title: {type: String},
    //     unit_body: {type: String}
    // }]
});

const Unit = module.exports = mongoose.model('Unit', unitSchema)

module.exports.getUnits = function(callback, limit){
    Unit.find(callback).limit(limit);
}

module.exports.getUnitById = function(id, callback){
    Unit.findById(id, callback)
}