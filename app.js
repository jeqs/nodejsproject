const express = require("express");
const app = express();
const puerto = process.env.PORT || 3000;
const mongoose = require("mongoose");
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dmrgvjo.mongodb.net/${process.env.DB}`;

// Conexión a BD
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Bases de datos contectada"))
  .catch(e => console.log("Error Conexion BD:" + e));

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// static content
app.use(express.static(__dirname + "/public"));

// router
app.use("/", require("./router/routes"));

// servicios
app.use("/mascotas", require("./router/mascotas"));

// middle ware
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "mi titulo dinámico - 404",
    descripcion: "ruta no encontrada",
  });
});

// server
app.listen(puerto, () => {
  // console.log(__dirname);
  console.log(`Escuchando en el puerto ${puerto}`);
});
