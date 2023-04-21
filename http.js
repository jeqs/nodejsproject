const http = require("http");
const puerto = 3000;

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Saludos desde el servidor con Node.js");
});

server.listen(puerto, () => {
  console.log(`Escuchando en el puerto ${puerto}`);
});