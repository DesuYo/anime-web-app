module.exports = `
  CREATE TABLE IF NOT EXISTS anime(
    id SERIAL PRIMARY KEY,
    slug VARCHAR (50) UNIQUE NOT NULL,
    title VARCHAR (50) UNIQUE NOT NULL,
    rating INT, 
    thumbnail VARCHAR (50),
    description VARCHAR (500),
    media VARCHAR (50) [] 
  ) 
`
