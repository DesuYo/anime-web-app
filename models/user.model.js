const bcrypt = require('bcrypt')

module.exports = (sequelize, types) => {
  const { STRING } = types

  const userModel = sequelize.define('user', {
    username: { 
      type: STRING, 
      unique: true 
    },
    email: {
      type: STRING,
      unique: true
    },
    password: STRING
  }, {
    hooks: {
      beforeSave: async user => {
        await bcrypt.hash(user.password, 10)
      }
    }
  })

  return userModel
}