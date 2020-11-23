const Sequelize = require('sequelize');
const sequelize = new Sequelize('movieSearch',
'postgres', 'Letmein1234!', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log ("Connected to movieSearch postgres database");
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;