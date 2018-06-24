const User = require('../models/anime.model')

module.exports = {
  async addAnime (req, res) {
    try {
      await User.init()
      const user = await User.add(req.body)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}