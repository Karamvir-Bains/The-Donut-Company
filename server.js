// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

const cookieSession = require('cookie-session');

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const menuApiRoutes = require('./routes/menu-api');
const statusRoutes = require('./routes/status');
const statusApiRoutes = require('./routes/status-api');
const usersRoutes = require('./routes/users');
const smsResponseRoutes = require('./routes/sms-response');
const checkoutRoutes = require('./routes/checkout');
const loginRoutes = require('./routes/login');
const orderNowSendRoutes = require('./routes/order-now-send');
const removeCookieItemRoutes = require('./routes/remove-cookie-item');
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/login', loginRoutes)
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/api/menu', menuApiRoutes);
app.use('/api/status', statusApiRoutes);
app.use('/status', statusRoutes);
app.use('/users', usersRoutes);
app.use('/sms-response', smsResponseRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/order-now-send', orderNowSendRoutes);
app.use('/remove-cookie-item', removeCookieItemRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
