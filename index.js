const mongoose = require('mongoose');
const express = require('express');
const routes = require ('./itemRoutes');

// const http = require("http");
const app = express();
app.use(express.json());

const hostname = "127.0.0.1";
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/itemDB', {
  "useNewUrlParser": true,
  "useUnifiedTopology": true
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>Hello World!</h1><h2>Item List</h2><ul><li style="color: red">Item 1</li></ul><h2>Add Item</h2><form><label for="item">Item: </label><input type="text"></br><input type="submit" value="Submit"></form>');
// });

routes(app);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
