const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
/*  db: {
    database: process.env.DB_NAME || 'shopdb',
    user: process.env.DB_USER || 'shopdb',
    password: process.env.DB_PASS || 'shopdb',
    options: {
      dialect: process.env.DIALECT || 'shopdb',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../tabtracker.sqlite')
    }
  }, */
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}