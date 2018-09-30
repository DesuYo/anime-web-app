const mongodb = require('mongodb')

module.exports = async () => {
  const { DB_CONNECTION_URL } = process.env
  return (await mongodb.connect(DB_CONNECTION_URL)).db()
}