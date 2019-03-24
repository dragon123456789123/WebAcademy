//imports

const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const ShopsController = require('./controllers/ShopsController');
const UserController = require('./controllers/UserController');
const ClassesController = require('./controllers/ClassesController');
const InstructorController = require('./controllers/InstructorController');
const UnitsController = require('./controllers/UnitsController');
const LessonsController = require('./controllers/LessonsController');
const PartsController = require('./controllers/PartsController');
const SubjectsController = require('./controllers/SubjectsController');
const LPartsController = require('./controllers/LPartsController');
const PPartsController = require('./controllers/PPartsController');
const FilesController = require('./controllers/FilesController');

// const multer = require('multer');
//
// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, './uploads/');
//   },
//   filename: function(req, file, cb){
//     cb(null, file.originalname);
//   }
// })
//
// const upload = multer({storage: storage});



// routes
module.exports = (app) => {
  app.post('/register',
    // AuthenticationControllerPolicy.register,
    AuthenticationController.register),
  app.post('/login',
    AuthenticationController.login),

  app.post('/shops',
      ShopsController.index),
  app.post('/create-class',
      ClassesController.create),
      app.post('/create-subject',
          SubjectsController.create),

  app.post('/create-unit',
      UnitsController.create),
      app.post('/class-units',
          UnitsController.index),
      app.post('/class-lessons',
          LessonsController.index),
  app.post('/create-lesson',
          LessonsController.create),
      app.post('/create-part',
          PartsController.create),
      app.post('/create-l-part',
          LPartsController.create)
  // upload.single("file")
  app.post('/create-p-part',
      PPartsController.create),
      // upload.single("file")
  app.post('/select-files',FilesController.create),
  // FilesController.create

  app.post('/dislike-shops',
      ShopsController.dislike)

  app.post('/my-iclasses',
    //isLoggedIn,
    InstructorController.index),
      app.post('/subjects',
          //isLoggedIn,
          SubjectsController.index),

  app.post('/remove-shops',
    UserController.remove)
};
