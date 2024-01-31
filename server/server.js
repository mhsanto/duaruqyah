// server.js
const express = require('express');
const db = require('./db');
const app = express();
const port = 3000; // Choose your desired port

// Middleware for parsing JSON
app.use(express.json());

// Require the database connection

// Require the routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
