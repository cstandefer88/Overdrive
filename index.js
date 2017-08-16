const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const mysql = require('mysql');
const Sequelize = require('sequelize');

require('./models/Item');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/itemRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
