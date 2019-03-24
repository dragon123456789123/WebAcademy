//import models
const User = require('../models/user');
const Student = require('../models/student');
const Instructor = require('../models/instructor');

const jwt = require('jsonwebtoken');
const config = require('../config/config')
const bcrypt = require('bcrypt-nodejs');


function jwtSignUser (user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user.toJSON(), config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
}

function encryptPassword (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

//controllers
module.exports = {
  async register (req, res) {
    try {
      await console.log('nnnnnnnnnnnnnnnnnnnn'),
          console.log(req.body)
      return
      req.body.password = encryptPassword(req.body.password)
      console.log(req.body)
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      // console.log(userJson)
      if(user.type=="Student"){
        const student = await Student.create(req.body)
        console.log('Student:'+ student)
      }
      if(user.type=="Instructor"){
        const instructor = await Instructor.create(req.body)
        console.log('Instructor: ' + instructor)
      }
      res.send({
        user: userJson,
        token: jwtSignUser(user)
      })
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
          email: email
      });
      console.log(user)
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      // const isPasswordValid = await user.validPassword(password)
      // if (!isPasswordValid) {
      //   return res.status(403).send({
      //     error: 'The login information was incorrect'
      //   })
      // }
      res.send({
        user: user,
        token: jwtSignUser(user)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to log in'
      })
    }
  }
}