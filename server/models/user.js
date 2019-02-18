var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');

var userSchema = new Schema({
    username:{
        type: String
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {
        type:String
    },
});


/*userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};*/

var User = module.exports = mongoose.model('User', userSchema);

//Get User by ID
module.exports.getUserById = function(id, callback){
    User.findById(id, callback)
}

//Get User by Username
module.exports.getUserByUsername = function(username, callback){
    var query = {username : username};
    User.findOne(query, callback)
}

//Compare passwords
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//Create Student
module.exports.saveStudent = function(newUser, newStudent, callback){
    bcrypt.hash(newUser.password, 10, function(err, hash){
        if(err) throw err
        //Set Hash
        newUser.password = hash;
        console.log('Student is being saved')
        async.parallel([newUser.save, newStudent.save], callback)
    });
}

//Create Instructor
module.exports.saveInstructor = function(newUser, newInstructor, callback){
    bcrypt.hash(newUser.password, 10, function(err, hash){
        if(err) throw err
        //Set Hash
        newUser.password = hash;
        console.log('Instructor is being saved')
        async.parallel([newUser.save, newInstructor.save], callback)
    });
}




