-- Drop and recreate Orders table
DROP TYPE IF EXISTS statuses CASCADE;
CREATE TYPE statuses AS ENUM ('PENDING', 'FULFILLED', 'CANCELLED');

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) NOT NULL,
  order_placed DATE NOT NULL,
  order_ended DATE NOT NULL,
  order_status statuses
);
