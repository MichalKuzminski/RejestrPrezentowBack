//import http
const http = require('http');
const app = require('./app');

const port = process.env.port || 3000;

//tworzę serwer
const server = http.createServer(app);

//odpalam serwer
server.listen(port, () => {
  console.log('App is listening on port', port);
});
