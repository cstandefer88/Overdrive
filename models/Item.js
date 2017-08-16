//Including dependency
const Sequelize = require("sequelize");

//Setting up the config
const sequelize = new Sequelize('overdrive', 'cstandefer', 'TestyTester', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

//Checking connection status
sequelize.authenticate().complete((err) => {
    if (err) {
        console.log('There is connection ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
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
sequelize.sync({force:true}).complete((err) => {
    if(err){
        console.log('An error occur while creating table');
    }else{
        console.log('Item table created successfully');
    }
});
