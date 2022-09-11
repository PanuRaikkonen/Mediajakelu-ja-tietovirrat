'use strict';

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

const users = [];

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('join', (username) => {
    users.push({ username: username, id: socket.id });
    console.log('users connected:', users);
    socket.emit('response', 'Joined with username ' + username);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id);
    // TODO: remove user with socket.id form users array
  });

  socket.on('chat message', (nick, msg, room) => {
    if (room === '') {
      console.log('message: ', msg);
      io.emit('chat message', nick, msg);
    } else {
      console.log('room message: ', msg);
      io.to(room).emit('chat message', nick, msg);
    }
  });

  socket.on('join-room', (room) => {
    socket.join(room);
    console.log('joined room ', room);
    console.log(socket.rooms);
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
