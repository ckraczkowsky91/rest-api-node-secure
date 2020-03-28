const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1><h2>Item List</h2><ul><li style="color: red">Item 1</li></ul><h2>Add Item</h2><form><label for="item">Item: </label><input type="text"></br><input type="submit" value="Submit"></form>');
    // GET Endpoint
    if (reqUrl.pathname == '/sample' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);
    }
});
