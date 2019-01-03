const http=require('http');
const requestlistener=(request, response) => {
  response.write('Hello from ici bas\n');
  response.end();
}

const server=http.createServer(requestlistener);
const confirmationcallback =() => {
  console.log('Server est en cours de fonctionnement');
}

server.listen(9000, confirmationcallback);
