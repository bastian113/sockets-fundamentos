// De esta forma importo un objeto de otro archivo (server.js)
const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => { // Este parámetro callback es la función enviada desde el cliente
        console.log(data);

        client.emit('enviarMensaje', data);
        // client.emit('enviarMensaje', {
        //     usuario: data.usuario,      // Esto se puede reemplazar la línea anterior, ya que data
        //     mensaje: data.mensaje       // tiene la misma estructura
        // });

        client.broadcast.emit('enviarMensaje', data); // Broadcast es para enviar a todos los usuarios conectados

        // if (mensaje.usuario) {
        //     callback({
        //         mensaje: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         mensaje: 'TODO SALIÓ MAL!!!!!'
        //     })
        // }

    });
});