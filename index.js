const http = require('http');

const PORT = 8000;

const requestHandler = (request, response) => {
  console.log(request.headers);
  response.end('Hello World!');
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    return console.log('Error:', err)
  }
  console.log(`Server is listening on ${PORT}`);
});
