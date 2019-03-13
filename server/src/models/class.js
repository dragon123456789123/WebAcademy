const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    instructor:{
        type: String,
    },
    units: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit"
        }
    ],
    Subject:
        {
            type: String,
        }
    //
    // units:[{
    //     unit_number: {type:Number},
    //     unit_title: {type: String},
    //     unit_body: {type: String}
    // }]
});

const Class = module.exports = mongoose.model('Class', classSchema)

module.exports.getClasses = function(callback, limit){
    Class.find(callback).limit(limit);
}

module.exports.getClassById = function(id, callback){
    Class.findById(id, callback)
}