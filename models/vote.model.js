module.exports = (sequelize, types) => {
  const { INTEGER } = types

  const voteModel = sequelize.define('anime', {
    points: INTEGER
  })

  voteModel.associate = models => {
    const { user, anime } = models
    voteModel.belongsTo(user, {
      foreignKey: 'userId'
    })
    voteModel.belongsTo(anime, {
      foreignKey: 'animeId'
    })
  }

  return voteModel
}

/*const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const voteSchema = new mongoose.Schema({
  userId: { type: ObjectId, ref: 'User' },
  animeId: { type: ObjectId, ref: 'Anime' },
  points: Number
}, {
  timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)*/