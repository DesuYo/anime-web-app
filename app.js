const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { join } = require('path')

module.exports = express()
  .set('view engine', 'pug')
  .set('views', join(__dirname, 'html'))
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => {
    res.render('home', { meta: { title: 'Djo Djo' } })
  })
