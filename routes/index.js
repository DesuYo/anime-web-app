const { Router } = require('express')
const ctrls = require('../controllers')
const schemas = require('../validations')
const validate = require('../services/validation.service')
const checkAuth = require('../services/auth.service')

module.exports = Router()
  .get('/anime', validate(schemas.anime.getList), ctrls.anime.getList)
  .post('/signup', validate(schemas.users.signUp), ctrls.users.signUp)
  .post('/login', validate(schemas.users.logIn), ctrls.users.logIn)

  .use(checkAuth)
  .post('/anime', validate(schemas.anime.add), ctrls.anime.add)
  .get('/likes', validate(schemas.likes.getLikesList), ctrls.likes.getLikesList)