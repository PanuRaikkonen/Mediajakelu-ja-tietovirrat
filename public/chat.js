'use strict';

// Localhost for development only
const socket = io('http://localhost:3000');
// const socket = io('panuraivm.westeurope.cloudapp.azure.com');

//Message values
document.querySelector('#msg-input').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  const nickname = document.getElementById('nickname');
  const room = document.getElementById('room-input');
  console.log('Sending: ', nickname.value, inp.value);
  socket.emit('chat message', nickname.value, inp.value, room.value);
  inp.value = '';
  nickname.value = nickname.value;
});

//User join
document.querySelector('#join').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('username');
  socket.emit('join', inp.value);
  inp.value = '';
});

//Print message
socket.on('chat message', (nick, msg) => {
  const item = document.createElement('li');
  item.classList.add('message');
  item.innerHTML = nick + ': ' + msg;
  document.getElementById('messages').appendChild(item);
});

socket.on('response', (msg) => {
  console.log(msg);
});

const joinRoomButton = document.getElementById('room-button');
const roomInput = document.getElementById('room-input');

joinRoomButton.addEventListener('click', () => {
  const room = roomInput.value;
  socket.emit('join-room', room);
});
