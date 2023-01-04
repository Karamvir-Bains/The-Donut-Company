-- Drop and recreate menu_items table

DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  img TEXT,
  price INTEGER NOT NULL,
  description VARCHAR(255) NOT NULL,
  preparation_time INTEGER NOT NULL
);
