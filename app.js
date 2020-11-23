require('dotenv').config();
let express = require('express');
let app = express();

const db = require("./db");

//let journal = require('./controllers/journalcontroller'); 
let user = require('./controllers/usercontroller');

app.use(require('./middleware/headers'));
app.use(express.json());
 
/*** Exposed route ***/
app.use ('/user',user);

/*** Protected route ***/
//app.use(require('./middleware/validate-session'));

//app.use('/journal', journal);

db.authenticate()
  .then(() => db.sync())  // => (force: true)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server: ] App is listening on Port ${process.env.PORT}`));  
  })
  .catch((err) => {console.log(err)
  })
