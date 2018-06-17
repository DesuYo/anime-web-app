const { Router } = require('express')
const ctrls = require('../controllers')

module.exports = Router()
  .post('/anime', ctrls.anime.addAnime)
  .post('/signup', Joi.validate(), ctrls.user.signUp)