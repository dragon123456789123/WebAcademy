const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const studentSchema = mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    address:[{
        street_address: {type: String},
        city: {type: String},
        zip: {type: String},
    }],
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    education:{
        type: String,
    },
    classes: [{
        class_id: {type: [mongoose.Schema.Types.ObjectId]},
        class_title: {type: String}
    }]
});

const Student = module.exports = mongoose.model('Student', studentSchema)