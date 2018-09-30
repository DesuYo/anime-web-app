module.exports = `
  CREATE TABLE IF NOT EXISTS comments(
    id SERIAL PRIMARY KEY,
    text VARCHAR (300) NOT NULL,
    posted_at DATE DEFAULT CURRENT_DATE,
    anime_id REFERENCES anime (id) ON DELETE CASCADE,
    owner_id REFERENCES users (id) ON DELETE CASCADE
  )
`