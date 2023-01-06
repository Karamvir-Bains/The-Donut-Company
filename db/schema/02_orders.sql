-- Drop and recreate Orders table

DROP TYPE IF EXISTS statuses CASCADE;
CREATE TYPE statuses AS ENUM ('PENDING', 'CONFIRMED', 'FULFILLED', 'CANCELLED');

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  order_placed TIMESTAMP NOT NULL DEFAULT (NOW() - interval '5 hour'),
  order_ended TIMESTAMP,
  order_status statuses NOT NULL
);

-- SELECT (NOW() - interval '5 hour');
SET timezone = 'EST';
