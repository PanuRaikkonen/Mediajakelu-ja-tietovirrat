'use strict';

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

let users = [];
let takenNames = [];

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('join', (username) => {
    if (users.some((item) => item.username === `${username}`)) {
      io.emit('Name already taken', username);
    } else {
      users.push({ username: username, id: socket.id });
      takenNames.push(username);
      console.log('users connected:', users);
      io.emit('chat-message', username + ' joined.');
      io.emit('new user', username);
      io.emit('Name available', username);
      io.emit('All users', takenNames);
      console.log('Current users: ', users);
    }
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
    const unjoinData = users.find((item) => item.id === `${socket.id}`);
    if (unjoinData) {
      const unjoinName = unjoinData.username;
      console.log('leaving: ', unjoinName);
      io.emit('chat-message', unjoinName + ' left the chat');
      users = users.filter((item) => item.id !== `${socket.id}`);
      takenNames = takenNames.filter((item) => item !== `${unjoinName}`);
      io.emit('All users', takenNames);
    }
  });

  socket.on('chat-message', (msg) => {
    // const messag = JSON.stringify(msg);
    console.log(msg);
    io.emit('chat-message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
