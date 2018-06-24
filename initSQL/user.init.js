module.exports = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR (15) UNIQUE NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL 
  )
`
  /*async getById (id) {
    return (await db.query({
      text: 'SELECT * FROM users WHERE id = $1',
      values: [ id ]
    })).rows[0]
  },

  async getId (user) {
    const { username, email } = user
    return (await db.query({
      text: `SELECT id FROM users WHERE username = $1 OR email = $2`,
      values: [ username, email ]
    }))
  },

  async checkPassword (user) {
    const { username, email, password } = user
    const modelPassword = (await db.query({
      text: `SELECT password FROM users WHERE username = $1 OR email = $2`,
      values: [ username, email ]
    })).rows[0].password

    return await bcrypt.compare(modelPassword, password)
  }
}*/