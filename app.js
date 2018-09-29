const express = require('express')
<<<<<<< HEAD
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const routes = require('./routes')

module.exports = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/v1', routes)
  .use((req, res) => res.status(404).end())
=======
const bodyParser = require('body-parser')
const cors = require('cors')
const { join } = require('path')
const pages = require('./routes/pages')

module.exports = express()
  .set('view engine', 'pug')
  .set('views', join(__dirname, 'public', 'html'))
  .use(express.static('public'))
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(pages)
>>>>>>> 87312a62be884d566a9bae6ce87e3382699bb6eb
