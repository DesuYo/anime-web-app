const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  rating: Number,
  description: String,
  thumbnail: { type: String, default: 'default_thumbnail.jpg'},
  media: [String] 
}, {
  timestamps: true
})

module.exports = mongoose.model('Anime', animeSchema)