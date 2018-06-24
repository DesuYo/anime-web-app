const Anime = require('../models/anime.model')

module.exports = {
  async addAnime (req, res) {
    try {
      await Anime.init()
      const anime = await Anime.add(req.body)
      return res.status(200).json(anime)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}