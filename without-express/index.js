import mongoose from "mongoose";

const http = require("http");

const hostname = "127.0.0.1";
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/itemDB', {
  "useNewUrlParser": true,
  "useUnifiedTopology": true
});

const server = require('./itemControllers');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>Hello World!</h1><h2>Item List</h2><ul><li style="color: red">Item 1</li></ul><h2>Add Item</h2><form><label for="item">Item: </label><input type="text"></br><input type="submit" value="Submit"></form>');
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
