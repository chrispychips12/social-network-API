const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001; // Set the port to listen on

// Middleware to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the routes defined in the routes folder
app.use(routes);

// Start the server once the database connection is open
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});