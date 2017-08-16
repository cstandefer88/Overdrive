const Sequelize = require('sequelize');
const sequelize = new Sequelize('overdrive', 'cstandefer', 'TestyTester', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});
 pool: {
   max: 5,
   min: 0,
   idle: 10000
 },
});

Sequelize.authenticate()
  .then(() => {
    Console.log('Successfully connected!');
  }).catch(error => {
    Console.log('THERE WAS AN ERROR!', error)
  });
