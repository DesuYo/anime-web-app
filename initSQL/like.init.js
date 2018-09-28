module.exports = `
  CREATE TABLE IF NOT EXISTS likes(
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users(id),
    comment_id INTEGER REFERENCES comments(id)
  )
`