//Including dependency
const Sequelize = require("sequelize");

//Setting up the config
const sequelize = new Sequelize('overdrive', 'cstandefer', 'TestyTester', {
    host: 'overdrivechallenge.cugmbu9gwo4j.us-east-2.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Create Item Table Structure
const Item = sequelize.define('item', {
  sku: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.STRING
  },
  freight: {
    type: Sequelize.STRING
  }
});

//Applying Item Table to database
Item.sync({force: true}).then(() => {
  // Table created
  return Item.create({
    sku: 'asdfas',
    name: 'ljk;lkj',
    cost: '1234.00',
    freight: '123.00'
  });
});
