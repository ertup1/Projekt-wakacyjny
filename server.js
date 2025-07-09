const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

let db;
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'animacja.html'));
});

MongoClient.connect(MONGO_URI)
  .then(client => {
    db = client.db('szachy');
    console.log('Połączono z MongoDB');

    server.listen(PORT, () => {
      console.log(`Serwer działa na porcie ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Błąd połączenia z MongoDB:', err);
  });

io.on('connection', (socket) => {
  console.log('Nowy gracz połączony');

  socket.on('ruch', async (move) => {
    console.log('Ruch:', move);
    await db.collection('ruchy').insertOne(move);
    io.emit('ruch', move);
  });

  socket.on('disconnect', () => {
    console.log('Gracz rozłączony');
  });
});
