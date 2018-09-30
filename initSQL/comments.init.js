module.exports = `
  CREATE TABLE IF NOT EXISTS comments {
    id SERIAL PRIMARY KEY,
    text VARCHAR (300) NOT NULL,
    posted_at TIMESTAMPTZ DEFAULT NOW(),
    reply_to REFERENCES comments (id) ON DELETE CASCADE,
    anime_id REFERENCES anime (id) ON DELETE CASCADE,
    owner_id REFERENCES users (id) ON DELETE CASCADE
  )
`