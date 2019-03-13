//imports
// var Shop = require('../models/shop');
var User = require('../models/user')
const Student = require('../models/student');
const Instructor = require('../models/instructor');
const Class = require('../models/class');

var jwt = require('jsonwebtoken')
const config = require('../config/config')

//controllers
module.exports = {
  async index(req, res) {
    try {
      var user = jwt.verify(req.body.userId, config.authentication.jwtSecret);
      console.log(req.body)
      var instructor = await Instructor.findOne({last_name: user.last_name});
      console.log(instructor)
      var classes = await Class.find({_id: {$in: instructor.classes}});
      console.log(classes)
      res.send(classes)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to fetch the shops'
      })
    }
  },
  async remove(req, res) {
    try {
      var shopId = req.body.shopId;
      var user = jwt.verify(req.body.userId, config.authentication.jwtSecret)
      var updatedUser = await User.update(
        {_id: user._id},
        {$pull: {shops: shopId}}
      )
      res.send(updatedUser)   //inform frontend of update
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to remove shops'
      })
    }
  }
}