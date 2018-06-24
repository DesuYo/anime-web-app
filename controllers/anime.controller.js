const db = require('../connections.pool')
const { anime } = require('../initSQL')

module.exports = {
  async add (req, res) {
    try {
      await db.query(anime)
      const { slug, title, thumbnail, description, media } = req.payload
      const [ row ] = (await db.query({
        text: 'INSERT INTO anime(slug, title, thumbnail, description, media) VALUES($1, $2, $3, $4, $5) RETURNING *;',
        values: [ slug, title, thumbnail, description, media ]
      })).rows
      return res.status(200).json(row)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async getList (req, res) {
    try {
      const { query, page } = req.payload
      const { rows } = await db.query({
        text: `SELECT * FROM anime WHERE title LIKE $1 OR description LIKE $1 LIMIT 30 OFFSET ($2 - 1) * 30`,
        values: [ `%${query}%`, page ]
      })
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: error.message })
    }
  }
}