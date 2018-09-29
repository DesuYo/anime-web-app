const { Router } = require('express')

module.exports = Router()
  .get('/admin', (req, res) => res.status(200).end())
  
  .get('/', (req, res) => {
    res.render('home', { meta: { title: 'Djo Djo' } })
  })

  .get('/signup', (req, res) => {
    res.render('signup', { meta: { title: 'Djo Djo' } })
  })