//Import Express
const express = require('express');
const bodyParser = require('body-parser');
//import routes
const apiRoutes = require('./ApiRoutes');

const mongoose = require('mongoose');

//Initialize the app
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log('Serve running on port 3000');
});

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/restdb');

const db = mongoose.connection;
