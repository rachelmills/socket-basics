var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

socket.on('connect', function() {
	console.log('Connected to socket.io server');
});

socket.on('message', function(message) {
	var timeStampMoment = moment.utc(message.timeStamp);
	var $message = jQuery('.messages');
	
	console.log('New message:');
	console.log(message.text);

	$message.append('<p><strong>' + message.name + ' ' + timeStampMoment.local().format('h:mm a') +'</strong></p>');
	$message.append('<p>' + message.text + '</p>');
});

var $form = jQuery('#message-form'); // use # to select by id   the $ is to say that the variable stores a jQuery instance of an element (has access to all jQuery methods)

$form.on('submit', function(event) {
	event.preventDefault();   // this prevents entire page refreshing on submit

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});
	$message.val('');
});