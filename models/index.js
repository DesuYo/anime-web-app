const fs = require('fs')
const Sequelize = require('sequelize')

const { host, database, username, password } = process.env

const connection = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres'
})

const db = {}

fs
  .readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js')
  .forEach(fileName => {
    const modelName = fileName.split('.')[0]
    db[modelName] = connection.import(`./${fileName}`)
  })

module.exports = {
  db,
  Sequalize
}