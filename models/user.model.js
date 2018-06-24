const pg = require('pg')
const db = require('../connections.pool')
const bcrypt = require('bcrypt')

module.exports = {
  async init() {
    return db.query(`
      CREATE TABLE IF NOT EXISTS user(
        id SERIAL PRIMARY KEY,
        username VARCHAR (15) UNIQUE NOT NULL,
        email VARCHAR (50) UNIQUE NOT NULL,
        password VARCHAR (30) NOT NULL 
      )
    `)
  },

  async add (user) {
    const { username, email, password } = user
    const hashedPassword = await bcrypt.hash(password, 10)

    return (await db.query({
      text: `INSERT INTO user(username, email, password) VALUES($1, $2, $3) 
        RETURNING username, email`,
      values: [ username, email, hashedPassword ]
    })).rows[0]
  },

  async getById (id) {
    return (await db.query({
      text: 'SELECT * FROM user WHERE id = $1',
      values: [ id ]
    })).rows[0]
  }
}