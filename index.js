<<<<<<< HEAD
require('dotenv').config()
const http = require('http')

const { PORT } = process.env

http
  .createServer(require('./app'))
=======
const http = require('http')
const app = require('./app')

const PORT = 3502
http
  .createServer(app)
>>>>>>> 87312a62be884d566a9bae6ce87e3382699bb6eb
  .listen(PORT, () => console.log(`SERVER RUNS ON PORT ${PORT}`))
