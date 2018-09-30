module.exports = `
  CREATE TABLE IF NOT EXISTS credentials {
    id SERIAL PRIMARY KEY,
    username VARCHAR (25) UNIQUE NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL
  }

  CREATE TABLE IF NOT EXISTS profiles {
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (25),
    last_name VARCHAR (25),
    birth_date DATE,
    avatar VARCHAR (100),
    credentials REFERENCES credentials (id) NOT NULL ON DELETE CASCADE
  }

  CREATE TABLE IF NOT EXISTS anime {
    id SERIAL PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    release DATE NOT NULL,
    thumbnail VARCHAR (100),
    description VARCHAR (500)
  }

  CREATE TABLE IF NOT EXISTS series {
    id SERIAL PRIMARY KEY,
    path VARCHAR (100) NOT NULL,
    order_index INT NOT NULL,
    anime_id REFERENCES anime (id) NOT NULL ON DELETE CASCADE,
  }

  CREATE TABLE IF NOT EXISTS marks {
    id SERIAL PRIMARY KEY,
    points NUMERIC (4, 2),
    anime_id REFERENCES anime (id) NOT NULL ON DELETE CASCADE,
    owner_id REFERENCES profiles (id) NOT NULL ON DELETE CASCADE
  }

  CREATE TABLE IF NOT EXISTS genres {
    id SERIAL PRIMARY KEY,
    name VARCHAR (25) NOT NULL UNIQUE,
    description VARCHAR (500) 
  }

  CREATE TABLE IF NOT EXISTS anime_genre {
    id SERIAL PRIMARY KEY,
    anime_id REFERENCES anime (id) NOT NULL ON DELETE CASCADE,
    genre_id REFERENCES genres (id) NOT NULL ON DELETE CASCADE
  }

  CREATE TABLE IF NOT EXISTS dubbers {
    id SERIAL PRIMARY KEY,
    name VARCHAR (25) NOT NULL UNIQUE
  }
  
  CREATE TABLE IF NOT EXISTS anime_dubbers {
    id SERIAL PRIMARY KEY,
    anime_id REFERENCES anime (id) NOT NULL ON DELETE CASCADE,
    dubber_id REFERENCES dubbers (id) NOT NULL ON DELETE CASCADE
  }

  CREATE TABLE IF NOT EXISTS comments {
    id SERIAL PRIMARY KEY,
    text VARCHAR (300) NOT NULL,
    posted_at TIMESTAMPTZ DEFAULT NOW(),
    reply_to REFERENCES comments (id) ON DELETE CASCADE, 
    anime_id REFERENCES anime (id) NOT NULL ON DELETE CASCADE,
    owner_id REFERENCES profiles (id) NOT NULL ON DELETE CASCADE
  }

  CREATE TABLE IF NOT EXISTS likes {
    id SERIAL PRIMARY KEY,
    liked BOOL NOT NULL,
    comment_id REFERENCES comments (id) NOT NULL ON DELETE CASCADE,
    owner_id REFERENCES profiles (id) NOT NULL ON DELETE CASCADE
  }
`