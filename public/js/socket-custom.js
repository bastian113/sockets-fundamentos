var socket = io();

// Los ON son para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) { // Con este tercer parámetro envío el callback al server
    console.log('Respuesta Server: ', resp);
});


// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});