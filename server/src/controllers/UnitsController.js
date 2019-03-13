//imports
// var Shop = require('../models/shop');
var User = require('../models/user')
const Student = require('../models/student');
const Instructor = require('../models/instructor');
const Class = require('../models/class');
const Unit = require('../models/unit');
const Lesson = require('../models/lesson');

var jwt = require('jsonwebtoken')
const config = require('../config/config')

//controllers
module.exports = {
  async create(req, res) {
    try {
      console.log(req.body)
      // var user = jwt.verify(req.body.userId, config.authentication.jwtSecret)
      // console.log(user)
      const unit = await Unit.create(req.body)
      console.log(unit)
      const classe = await Class.findById({
        _id: req.body.classId
      })
      var updatedClasse = await Class.update(
          {_id: classe._id},
          {$push: {units: unit._id}}
      )
      res.send(updatedClasse)
      console.log(classe)
      const classetoJson = classe.toJSON()
      // res.send({
      //   classe: classetoJson,
      //   // token: jwtSignUser(user)
      // })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to like shops'
      })
    }
  },

  async index(req, res) {
    try {
      console.log('kkkkkkkkkkkkkkkkkk'+ req.body)
      const classe = await Class.findById({_id: req.body.classId});
      console.log(classe)
      const units = await Unit.find({_id: {$in: classe.units}});
      for( let unit of units){
        unit.lessons = await Lesson.find({_id: {$in: unit.lessons}})
      }
      console.log('ooooooooooooooooooooooooooooo'+ units[1].lessons)
      res.send(units)
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