//import expresa
const express = require('express');
const cors = require('cors');

//importuję zmienne środowiskowe
require('dotenv').config();

//import mongoose
const mongoose = require('mongoose');
//połączenie z bazą
mongoose.connect(
  'mongodb+srv://' +
    process.env.DB_USERNAME +
    ':' +
    process.env.DB_PASSWORD +
    '@cluster0.ahmrhix.mongodb.net/cars?retryWrites=true&w=majority'
);

//instancja expresa
const app = express();

//uruchamiam loggera
const morgan = require('morgan');
app.use(morgan('combined'));

//uruchamiam body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

//routy
const presentsRoutes = require('./api/routes/presents');
const userRoutes = require('./api/routes/users');
app.use('/presents', presentsRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  res.status(404).json({ wiadomosc: 'Nie odnaleziono' });
});

module.exports = app;
