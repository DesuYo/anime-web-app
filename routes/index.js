const { Router } = require('express')
const { checkAuth } = require('../services/auth.service')

module.exports = Router()
  .use(require('./guest.routes'))
  .use(checkAuth)
  //.use(require('./user.routes'))
  .use(require('./admin.routes'))
