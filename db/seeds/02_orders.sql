-- Documentation on TIMESATAMP type
-- https://www.postgresql.org/docs/current/datatype-datetime.html
-- SELECT (NOW() - interval '5 hour');

-- Orders table seeds

-- -- Live orders
-- INSERT INTO orders (user_id, order_placed, order_status) VALUES
--   (1, TIMESTAMP '2023-01-06 12:05:55', 'PENDING');

-- -- Completed orders
-- INSERT INTO orders (user_id, order_placed, estimated_order_time, order_status) VALUES
--   (3, TIMESTAMP '2023-01-04 14:50:00', '30 - 45', 'CONFIRMED'),
--   (2, TIMESTAMP '2023-01-04 12:00:10', '45 - 60', 'FULFILLED'),
--   (2, TIMESTAMP '2023-01-04 10:05:00', '30 - 45', 'CANCELLED');
