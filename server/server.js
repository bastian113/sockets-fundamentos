const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); // Lo trae Node por defecto y si quiero puedo trabajar con https

const path = require('path');

const app = express();

/*
 * El envío de app como parámetro funciona ya que express utiliza el servidor http que tiene node
 * y las configuraciones son tan parecidas que por eso funciona.
 */
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // Middleware

// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});