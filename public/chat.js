'use strict';

// Localhost for development only
const socket = io('http://localhost:3000');
// const socket = io('https://panuraivm.westeurope.cloudapp.azure.com:443');

const form = document.getElementById('chat-input');
const join = document.getElementById('join');
const inp = document.getElementById('m');
const messages = document.getElementById('messages');
const username = document.getElementById('username');

const chatscroll = document.getElementById('chat-scroll');

document.getElementById('chatBtn').disabled = true;

let user;

//Message values
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inp.value) {
    const payload = `${user}` + ': ' + `${inp.value}`;
    socket.emit('chat-message', payload);
    inp.value = '';
  }
});

//User join
join.addEventListener('submit', (event) => {
  event.preventDefault();
  if (username.value) {
    user = username.value;
    socket.emit('join', user);
  }
});

//Print message
socket.on('chat-message', (msg) => {
  console.log(msg);
  const item = document.createElement('li');
  item.classList.add('message');
  item.innerText = msg;
  messages.appendChild(item);
  chatscroll.scrollTo(0, messages.scrollHeight);
});

socket.on('All users', (msg) => {
  console.log('users connected', msg);
});

socket.on('Name available', (msg) => {
  console.log(msg, 'name available');
  nameIsnt();
});

socket.on('Name already taken', (msg) => {
  console.log(msg, 'name taken');
  nameIs();
});

function nameIsnt() {
  document.getElementById('chatBtn').disabled = false;
  document.getElementById('taken').innerHTML = '';
  document.getElementById('usernameBox').classList.add('hidden');
}
function nameIs() {
  document.getElementById('chatBtn').disabled = true;
  document.getElementById('taken').innerHTML = 'Name already taken!';
  document.getElementById('usernameBox').classList.add('block');
}
