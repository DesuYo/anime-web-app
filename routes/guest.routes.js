const { Router } = require('express')
const ctrls = require('../controllers')
const validate = require('../services/validation.service')
const schemas = require('../validations')

module.exports = Router()
  .get('/anime', validate(schemas.anime.getList), ctrls.anime.getList)
  .post('/signup', validate(schemas.user.signUp), ctrls.user.signUp)