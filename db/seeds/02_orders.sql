-- Documentation on TIMESATAMP type
-- https://www.postgresql.org/docs/current/datatype-datetime.html
-- SELECT (NOW() - interval '5 hour');

-- Orders table seeds

-- Completed orders
INSERT INTO orders (user_id, order_placed, order_ended, order_status) VALUES
  (1, TIMESTAMP '2023-01-04 14:51:14', TIMESTAMP '2023-01-04 15:21:14', 'FULFILLED'),
  (1, TIMESTAMP '2023-01-04 15:30:00', TIMESTAMP '2023-01-04 16:00:00', 'FULFILLED'),
  (2, TIMESTAMP '2023-01-04 10:05:00', TIMESTAMP '2023-01-04 10:51:14', 'CANCELLED'),
  (2, TIMESTAMP '2023-01-04 12:00:10', TIMESTAMP '2023-01-04 12:40:00', 'FULFILLED'),
  (3, TIMESTAMP '2023-01-04 14:50:00', TIMESTAMP '2023-01-04 15:01:10', 'FULFILLED');

-- Live orders
INSERT INTO orders (user_id, order_placed, order_status) VALUES
  (1, TIMESTAMP '2023-01-06 12:05:55', 'PENDING'),
  (3, TIMESTAMP '2023-01-06 14:05:55', 'CONFIRMED');
