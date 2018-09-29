module.exports = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR (15) UNIQUE NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL 
  )
`