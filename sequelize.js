const Sequelize = require('sequelize');
const sequelize = new Sequelize('overdrive', 'cstandefer', 'TestyTester', {
    host: 'overdrivechallenge.cugmbu9gwo4j.us-east-2.rds.amazonaws.com',
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
