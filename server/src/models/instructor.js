const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const instructorSchema = mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    address:[{
        street_address: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: String},
    }],
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class"
        }
    ],

});

const Instructor = module.exports = mongoose.model('Instructor', instructorSchema)