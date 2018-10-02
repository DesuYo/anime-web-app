const { Router } = require('express')
const ctrls = require('../controllers')

module.exports = Router()
  .post('/users/signup', ctrls.users.signUp)