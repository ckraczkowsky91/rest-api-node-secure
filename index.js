/*
Basic web server code
*/
const mongoose = require('mongoose');
const express = require('express');
const routes = require ('./routes');

const app = express();
app.use(express.json());

const hostname = "127.0.0.1";
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/itemDB', {
  "useNewUrlParser": true,
  "useUnifiedTopology": true
});

routes(app);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
Added security code
*/
