var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io server');
});

socket.on('message', function(message) {
	jQuery('.messages').append('<p>' + message.text + '</p>');
	console.log('New message:');
	console.log(message.text);
});

var $form = jQuery('#message-form'); // use # to select by id   the $ is to say that the variable stores a jQuery instance of an element (has access to all jQuery methods)

$form.on('submit', function(event) {
	event.preventDefault();   // this prevents entire page refreshing on submit

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});
	$message.val('');
});