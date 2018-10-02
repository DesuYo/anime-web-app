const express = require('express')
const { join } = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const pages = require('./routes/pages')

module.exports = express()
  .set('view engine', 'pug')
  .set('views', join(__dirname, 'public', 'html'))
  .use(express.static('public'))
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', routes)
  .use(pages)
  .use((req, res) => {
    return res.status(404).json({
      message: 'Resource was not found'
    })
  })