const Sequelize = require('sequelize');

const sequelize = new Sequelize('movieSearch', 'postgres', process.env.POSTGRESPASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(
  function() {
    console.log('Connected to the movieSearch Database!');
  },
  function(err){
    console.log(err);
  }
);

module.exports = sequelize;