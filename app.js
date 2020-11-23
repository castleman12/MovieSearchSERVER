require('dotenv').config(); 
let express = require('express');
let app = express();
let sequelize = require('./db');
let watchlist = require('./controllers/watchlistcontroller');

sequelize.sync();

app.use('/watchlist', watchlist);

app.listen(process.env.PORT, function(){
  console.log(`App is listening on port ${process.env.PORT}`)
})