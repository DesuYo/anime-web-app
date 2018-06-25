const { Router } = require('express')
const ctrls = require('../controllers')
const validate = require('../services/validation.service')
const schemas = require('../validations')

module.exports = Router()
  .post('/anime', validate(schemas.anime.add), ctrls.anime.add)