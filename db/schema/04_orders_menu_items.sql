-- Drop and recreate orders_menu_items table

DROP TABLE IF EXISTS orders_menu_items CASCADE;
CREATE TABLE orders_menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) NOT NULL,
  item_id INTEGER REFERENCES menu_items(id) NOT NULL,
  quantity INTEGER NOT NULL
);
