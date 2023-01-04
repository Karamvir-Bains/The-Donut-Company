-- Documentation on TIMESATAMP type
-- https://www.postgresql.org/docs/current/datatype-datetime.html
-- SELECT (NOW() - interval '5 hour');

-- Users table seeds

INSERT INTO orders (user_id, order_placed, order_ended, order_status)
  VALUES (1, TIMESTAMP '2023-01-04 14:51:14', TIMESTAMP '2023-01-04 15:21:14', 'FULFILLED'),
  VALUES (1, TIMESTAMP '2023-01-04 15:30:00', TIMESTAMP '2023-01-04 16:00:00', 'FULFILLED'),
  VALUES (2, TIMESTAMP '2023-01-04 10:05:00', TIMESTAMP '2023-01-04 10:51:14', 'CANCELLED'),
  VALUES (2, TIMESTAMP '2023-01-04 12:00:10', TIMESTAMP '2023-01-04 12:40:00', 'FULFILLED'),
  VALUES (3, TIMESTAMP '2023-01-04 14:50:00', TIMESTAMP '2023-01-04 15:01:10', 'FULFILLED');

INSERT INTO orders (user_id, order_placed, order_status)
  VALUES (3, TIMESTAMP '2023-01-04 16:05:55', 'PENDING');
