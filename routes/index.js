const { Router } = require('express')
const ctrls = require('../controllers')

module.exports = Router()
  .post('/anime', ctrls.anime.addAnime)
  .post('/signup', ctrls.user.signUp)