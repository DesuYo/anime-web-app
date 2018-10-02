require('dotenv').config()
const http = require('http')
const app = require('./app')

const db = require('./db')
const initModels = require('./initSQL')

const { PORT } = process.env

async function launchServer() {
  try {
    await db.query(initModels)

    http
      .createServer(app)
      .listen(PORT, () => console.log(`SERVER RUNS ON PORT ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}
launchServer()