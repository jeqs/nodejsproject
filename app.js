const express = require("express");
const app = express();
const puerto = 3000;

// server
app.listen(puerto, () => {
  // console.log(__dirname);
  console.log(`Escuchando en el puerto ${puerto}`);
});

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// static content
app.use(express.static(__dirname + "/public"));

// dinamic content index
app.get("/", (req, res) => {
  console.log("Respuesta del Servidor Render...");
  res.render("index", {titulo : "mi titulo dinámico - index"});
});

// dinamic content servicios
app.get("/servicios", (req, res) => {
  console.log("Respuesta del Servidor Render...");
  res.render("servicios", {titulo : "mi titulo dinámico - servicios"});
});

app.use( (req, res, next) => {
  res.status(404).render("404", {
    titulo: "mi titulo dinámico - 404",
    descripcion: "ruta no encontrada",
  });
});





// // static content
// app.use( (req, res, next) => {
//   res.status(404).sendFile(__dirname + "/public/404.html");
// });

// // router
// app.get("/", (req, res) => {
//   console.log("Respuesta del Servidor...");
//   res.send("Saludos desde el servidor con Express.js");
// });

// app.get("/servicios", (req, res) => {
//   console.log("Respuesta del Servidor...");
//   res.send("Pagina de Servicios");
// });
