const pg = require('pg')
const db = require('../connections.pool')

module.exports = {
  async init () {
    return await db.query(`
      CREATE TABLE IF NOT EXIST anime(
        id SERIAL PRIMARY_KEY,
        slug VARCHAR (50) UNIQUE NOT NULL,
        title VARCHAR (50) UNIQUE NOT NULL,
        rating INT 
        thumbnail VARCHAR (50),
        description VARCHAR (500),
        media VARCHAR (50) [] 
      ) 
    `)
  },
   
  async add (anime) {
    const { slug, title, thumbnail, description, media } = anime
    return (await db.query({
      text: 'INSERT INTO anime(title, thumbnail, description, media) VALUES($1, $2, $3, $4, $5) RETURNING *;',
      values: [ slug, title, thumbnail, description, media ]
    })).rows[0]
  },

  async getById (id) {
    return (await db.query({
      text: 'SELECT * FROM anime WHERE id = $1',
      values: [ id ]
    })).rows[0]
  },

  async getList (query) {
    return (await db.query({
      text: `SELECT * FROM anime WHERE title LIKE '%$1%' OR description LIKE '%$1%'`,
      values: [ query ]
    }))
  }
}

/*module.exports = (sequelize, types) => {
  const { STRING, TEXT } = types

  const animeModel = sequelize.define('anime', {
    title: { type: STRING, unique: true },
    thumbnail: STRING,
    description: TEXT
  })

  return animeModel
}*/


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
