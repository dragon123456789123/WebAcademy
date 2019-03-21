//import models
// var Shop = require('../models/shop');
var User = require('../models/user')
const Student = require('../models/student');
const Instructor = require('../models/instructor');
var Class = require('../models/class')
var Subject = require('../models/subject')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const moment = require('moment')

//controllers
module.exports = {

  //create classes feature
  async create(req, res) {
    try {
      console.log(req.body)
      var user = jwt.verify(req.body.userId, config.authentication.jwtSecret)
      console.log(user)
      const classe = await Class.create(req.body)
      console.log(classe._id)
      const instructor = await Instructor.findOne({
        last_name: user.last_name
      })
      var updatedInstructor = await Instructor.update(
          {_id: instructor._id},
          {$push: {classes: classe._id}}
      )
      res.send(updatedInstructor)
      const classetoJson = classe.toJSON()
      res.send({
        classe: classetoJson,
        // token: jwtSignUser(user)
      })

      // var t = userShops.shops.indexOf(shopId);
      // if (t == -1) {
      //   var updatedUser = await User.update(
      //       {_id: user._id},
      //       {$push: {shops: shopId}}
      //   )
      // }
      // res.send(updatedUser)     //inform frontend of update
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to like shops'
      })
    }
  },

  //render shops
  async index(req, res) {
    try {
      console.log(req.body);
      const subjects = await Subject.find({});
      console.log('ppppppppppppppppppppppppppppp'+subjects)
      for( let subject of subjects){
        subject.classes = await Class.find({_id: {$in: subject.classes}})
      }
      console.log('ppppppppppppppppppppppppppppp'+subjects)
      res.send(subjects)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to fetch the shops'
      })
    }
  },


  //dislike shops feature
  async dislike(req, res) {
    try {
      var shopId = req.body.shopId;
      var user = jwt.verify(req.body.userId, config.authentication.jwtSecret)
      var userDisliked = await User.findById({_id: user._id}, 'disliked')
      let n = 0
      for (let disliked of userDisliked.disliked) {
        if (disliked.shop.toString() == shopId.toString()) {
          n = -1
          break
        }
      }
      if (n == 0) {
          var updatedUser = await User.update(
            {_id: user._id},
            {$push: {disliked: {shop: shopId}}},
          )
      }
      res.send(updatedUser)     //inform frontend of update
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to like shops'
      })
    }
  },
}