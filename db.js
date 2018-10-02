const { Pool } = require('pg')

const { DB_URL } = process.env

module.exports = new Pool({
  connectionString: DB_URL
})