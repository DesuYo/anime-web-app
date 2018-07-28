const { Router } = require('express')

module.exports = Router()
  .get('/admin', (req, res) => res.status(200).end())
  
  .get('/', (req, res) => {
    res.render('home', { meta: { title: 'Djo Djo' } })
  })
