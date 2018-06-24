module.exports = {
  user: require('./user.model'),
  anime: require('./anime.model')
}

/*const fs = require('fs')
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
    db[modelName] = connection.import(`${__dirname}/user.model.js`)
  })

module.exports = {
  db,
  Sequelize
}*/
