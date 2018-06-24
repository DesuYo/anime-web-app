module.exports = {
  user: require('./user.model'),
<<<<<<< HEAD:models/index.js
  anime: require('./anime.model')
}
=======
  anime: require('./anime.init')
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
    db[modelName] = connection.import(`./${fileName}`)
  })

module.exports = {
  db,
  Sequelize
}*/
>>>>>>> 0bc016fc04cd61e63fd937581063edb33f50f158:initSQL/index.js
