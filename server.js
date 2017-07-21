var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); // start new server and user express app as boiler plate
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) { // listen for events
	console.log('User connected via socket.io');

	socket.on('message', function(message) {
		console.log('Message received:  ' + message.text);
		// socket.broadcast.emit('message', message);  // this broadcasts to everyone except you
		io.emit('message', message);	// this broadcasts to everyone
	});

	socket.emit('message', {
		text: 'Welcome to the chat application.'
	});
});

http.listen(PORT, function() {
	console.log('Server started');
});