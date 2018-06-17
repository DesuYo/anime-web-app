const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
})

userSchema.pre('save', async function () {
  await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model('User', userSchema)

