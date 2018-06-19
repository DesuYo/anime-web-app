module.exports = (sequelize, types) => {
  const { STRING, TEXT } = types

  const animeModel = sequelize.define('anime', {
    title: { type: STRING, unique: true },
    thumbnail: STRING,
    description: TEXT
  })

  return animeModel
}


/*const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  thumbnail: String,
  description: String,
  media: [String] 
}, {
  timestamps: true
})

module.exports = mongoose.model('Anime', animeSchema)*/