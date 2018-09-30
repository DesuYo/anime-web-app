module.exports = {
  async addComment (req, res) {
    try {
      const db = await require('../db')()
      const { text, animeId } = req.payload

      const comment = { text, animeId, ownerId: req.user.id }
      await db
        .collection('comments')
        .insertOne(comment)

      res.status(201).json(comment)

    } catch (error) {
      res.status(500).json(error)
    }
  },

  async filterComments (req, res) {
    try {
      const db = await require('../db')()
      const payload = { animeId, ownerId } = req.payload

      const filter = {}
      for (let key in payload) {
        if (payload[key]) filter[key] = payload[key]
      }

      const comments = await db
        .collection('comments')
        .find(filter)
        .toArray()
      
      res.status(200).json(comments)

    } catch (error) {
      res.status(500).json(error)
    }
  }
}