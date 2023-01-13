The Donut Company
=========
A web app that allows a restaurant to communicate over SMS, with a client that has placed an order on the restaurant's store page. The restaurant owner is also able to update the order status page to allow the customer to know when the order is ready for pickup over SMS.

## Final Product

### Store Page
!["Screenshot of Store Page"]()

### Status Page
!["Screenshot of Status Page"](https://github.com/Karamvir-Bains/Food-Pick-Up-Ordering-App/blob/update/README/docs/status-page.png)
!["Screenshot of Confirmed Status"](https://github.com/Karamvir-Bains/Food-Pick-Up-Ordering-App/blob/update/README/docs/inprogress-status.png)
!["Screenshot of Ready Status"](https://github.com/Karamvir-Bains/Food-Pick-Up-Ordering-App/blob/update/README/docs/complete-status.png)

### SMS Communication
!["Screenshot of Twilio SMS Communication"](https://github.com/Karamvir-Bains/Food-Pick-Up-Ordering-App/blob/update/README/docs/SMS-message.png)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Setup the following Twilio variables in the .env file
  - RESTAURANT_PHONE
  - PHONE_NUMBER
  - MESSAGING_SERVICE_SID
  - AUTHENTICATION_TOKEN
  - ACCOUNT_SID
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Setup and host a [ngrok network](https://ngrok.com/).
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Chalk
- Cookie-Parser
- Cookie-Session
- Dotenv
- Ejs
- Express
- Morgan
- Sass
- Twilio


## Documentation

- `/`: Renders the store page HTML.
- `/status`: Renders the status page HTML.
- `/login`: Logs the user in and sets cookie session data.
- `/checkout`: Handles adding items to checkout.
- `/remove-cookie-item`: Handles removing items from checkout.
- `/order-now-send`: Sends an order now request to the server, and creates a Twilio sms to the restaurant.
- `/sms-response`: Post from Twilio sms that handles restaurant sms and server/client response.
- `/api/users`: Returns users table.
- `/api/menu`: Returns restaurant menus.
- `/api/status`: Returns the current status of an order.
