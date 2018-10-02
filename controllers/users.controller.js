const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../db')

module.exports = {
  async signUp (req, res) {
    try {
      const { username, email, password, first_name, last_name, birth_date, avatar } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)

      const [ createdUser ] = (await db.query({
        text: `WITH cred AS (INSERT INTO credentials (username, email, password) VALUES ($1, $2, $3)
          RETURNING id)
          INSERT INTO profiles (first_name, last_name, birth_date, avatar, credentials_id) 
          VALUES($4, $5, $6, $7, (SELECT id FROM cred)) RETURNING username, email`,
        values: [ username, email, hashedPassword, first_name, last_name, birth_date, avatar ]
      })).rows
      
      return res.status(201).json({
        createdUser,
        message: 'User was saved successfully'
      })
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  },

  async logIn (req, res) {
    try {
      const { username, email, password } = req.payload

      const [ loggedUser ] = (await db.query({
        text: `SELECT id, password FROM users WHERE username = $1 OR email = $2;`,
        values: [ username, email ]
      })).rows

      const userPassword = loggedUser.password
      const checkedPassword = await bcrypt.compare(password, userPassword)

      if (!checkedPassword) {
        return res.status(401).json({
          error: 'Unauthorized user'
        })
      }

      const { id } = loggedUser
      const token = jwt.sign({
        id
      },
      process.env.JWT_KEY, {
        expiresIn: "2h"
      })

      return res.status(200).json({
        token,
        message: 'Authorization successfull'
      })
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}