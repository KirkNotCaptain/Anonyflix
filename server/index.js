const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;

const http = require('http');
const server = http.createServer();
server.listen(webSocketServerPort);
console.log('Websocket server listening on localhost://', webSocketServerPort);

const wsServer = new webSocketServer({
  httpServer: server,
});

const clients = {};
let clientId = 0;
var sharedMovies = [];

wsServer.on('request', (request) => {
  console.log('Received new connection from client: ', clientId);
  clientId++;

  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);

  clients[clientId] = connection;

  for (id in clients) {
    clients[id].sendUTF(JSON.stringify(sharedMovies));
  }

  console.log(
    `connected client ${clientId} in ${Object.getOwnPropertyNames(clients)}`
  );

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log('Received Message: ', message.utf8Data);
      console.log('type of data: ', typeof message.utf8Data);
    }

    if (JSON.parse(message.utf8Data)['delete'] !== undefined) {
      console.log('delete request received');
      // console.log(JSON.parse(message.utf8Data)['delete']['id']);

      // sharedMovies = sharedMovies.filter((movie) => {
      //   movie.id !== JSON.parse(message.utf8Data)['delete']['id'];
      // });

      for (var i = 0; i < sharedMovies.length; i++) {
        if (
          JSON.parse(message.utf8Data)['delete']['id'] === sharedMovies[i].id
        ) {
          console.log('match');
          console.log(JSON.parse(message.utf8Data)['delete']);
          if (
            JSON.parse(message.utf8Data)['delete']['userId'] ===
            sharedMovies[i]['userId']
          ) {
            console.log('id match');
            sharedMovies.splice(i, 1);
          }
        }
      }

      for (id in clients) {
        clients[id].sendUTF(JSON.stringify(sharedMovies));
      }
    } else {
      sharedMovies.push(JSON.parse(message.utf8Data));
      // console.log(sharedMovies);

      for (id in clients) {
        // clients[id].sendUTF(message.utf8Data);
        clients[id].sendUTF(JSON.stringify(sharedMovies));

        // console.log('sending message to: ', clients[id]);
      }
    }
  });
});
