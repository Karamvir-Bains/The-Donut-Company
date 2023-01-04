-- Drop and recreate restaurants table

DROP TABLE IF EXISTS restaurants CASCADE;
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone BIGINT NOT NULL,
  address VARCHAR(255) NOT NULL
);
