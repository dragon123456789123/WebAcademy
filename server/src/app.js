//requires
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
// const multer = require('multer');
var fs = require('fs');


const app = express()


app.use('/uploads', express.static('uploads'))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/webacdb',
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
}
);

// app.use(multer({ dest: '/uploads/',
// rename: function (fieldname, filename) {
//     return filename;
// },
// }));

require('./routes')(app)


app.listen(process.env.PORT || 8081)

module.exports = app;