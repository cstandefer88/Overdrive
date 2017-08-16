const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Sequelize = require('sequelize');

require('./models/Item');

const app = express();

app.use(morgan('combined'));

const router = express.Router();
app.use('/api', router);

router.use((req, res, next) => {
    console.log('Slowly but surely the mojo is coming back.');
    next();
});

require('./routes/itemRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
