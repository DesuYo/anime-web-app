const { Router } = require('express')
const ctrls = require('../controllers')
const validator = require('../services/validation.service')
const userValidation = require('../validations/user.schema')
const auth = require('../services/auth.service')

module.exports = Router()
  .post('/anime', ctrls.anime.addAnime)
  .post('/signup', validator.validateBody(userValidation), ctrls.user.signUp)