const { Router } = require('express')
const ctrls = require('../controllers')
const schemas = require('../validations')
const validate = require('../services/validation.service')
const checkAuth = require('../services/auth.service')

module.exports = Router()
  .get('/anime', validate(schemas.anime.getList), ctrls.anime.getList)
  .post('/signup', validate(schemas.user.signUp), ctrls.user.signUp)
  .post('/login', validate(schemas.user.logIn), ctrls.user.logIn)

  .use(checkAuth)
  .post('/anime', validate(schemas.anime.add), ctrls.anime.add)
  .get('/likes', validate(schemas.like.getLikesList), ctrls.like.getLikesList)