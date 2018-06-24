const pg = require('pg')
const db = require('../connections.pool')
const bcrypt = require('bcrypt')

module.exports = {
  async init() {
    return db.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR (15) UNIQUE NOT NULL,
        email VARCHAR (50) UNIQUE NOT NULL,
        password VARCHAR (100) NOT NULL 
      )
    `)
  },

  async add (user) {
    const { username, email, password } = user
    const hashedPassword = await bcrypt.hash(password, 10)

    return (await db.query({
      text: `INSERT INTO users(username, email, password) VALUES($1, $2, $3) 
        RETURNING username, email`,
      values: [ username, email, hashedPassword ]
    })).rows[0]
  },

  async getById (id) {
    return (await db.query({
      text: 'SELECT * FROM users WHERE id = $1',
      values: [ id ]
    })).rows[0]
  },

  async checkPassword (user) {
    const { username, email, password } = user
    const modelPassword = (await db.query({
      text: `SELECT password FROM users WHERE username = $1 OR email = $2`,
      values: [ username, email]
    })).rows[0].password
    
    console.log(modelPassword)
    return await bcrypt.compare()
  }
}