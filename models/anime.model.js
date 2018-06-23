module.exports = (sequelize, types) => {
  const { STRING, TEXT } = types
<<<<<<< HEAD

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
=======

  const animeModel = sequelize.define('anime', {
    title: { type: STRING, unique: true },
    thumbnail: STRING,
    description: TEXT
  })

  return animeModel
}
>>>>>>> 52b674f9e439d0ee6c72e802750bd5a9c86870ad
