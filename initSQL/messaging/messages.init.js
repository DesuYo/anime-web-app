module.exports = `
  CREATE TABLE IF NOT EXISTS comments {
    id SERIAL PRIMARY KEY,
    text VARCHAR (300) NOT NULL,
    posted_at TIMESTAMPTZ DEFAULT NOW(),
    parent_id REFERENCES comments (id) ON DELETE CASCADE, 
    message_id REFERENCES messages (id) UNIQUE ON DELETE CASCADE,
  }

  CREATE TABLE IF NOT EXISTS likes {
    id SERIAL PRIMARY KEY,
    comment_id REFERENCES comments (id) ON DELETE CASCADE,
  }
`