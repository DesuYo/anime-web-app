module.exports = (sequelize, types) => {
  const { STRING, TEXT } = types

  const animeModel = sequelize.define('anime', {
    title: { type: STRING, unique: true },
    thumbnail: STRING,
    description: TEXT
  })

  return animeModel
}