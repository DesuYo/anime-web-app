const db = require('../connections.pool')
const { comments } = require('../initSQL')

module.exports = {
  async addComment (req, res) {
    try {
      const { text, animeId } = req.body
      await db.query(comments)
      const [ postedComment ] = (await db.query({
        text: `INSERT INTO comments (text, anime_id, owner_id) VALUES ($1, $2, $3)`,
        values: [text, animeId, req.user.id]
      })).rows

      res.status(201).json(postedComment)

    } catch (error) {
      res.status(500).json(error)
    }
  }
}