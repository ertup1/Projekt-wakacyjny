const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Chess } = require('chess.js');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  //res.send('Serwer szachowy działa!');
  res.sendFile(path.join(__dirname, 'stronaglowna.php'));
});

io.on('connection', (socket) => {
  const chess = new Chess();
  console.log('Gracz połączony');

  socket.on('ruch', (move) => {
    if (chess.move(move)) {
      io.emit('ruch', move);
    }
  });

  socket.on('disconnect', () => {
    console.log('Gracz rozłączony');
  });
});

server.listen(PORT, () => {
  console.log(`Działa na porcie ${PORT}`);
});
