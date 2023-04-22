const express = require("express");
const router = express.Router();

// dinamic content index
router.get("/", (req, res) => {
  //console.log("Respuesta del Servidor Render...");
  res.render("index", { titulo: "mi titulo dinámico - index" });
});

// dinamic content servicios
router.get("/servicios", (req, res) => {
  //console.log("Respuesta del Servidor Render...");
  res.render("servicios", { titulo: "mi titulo dinámico - servicios" });
});

// dinamic content mascotas
router.get("/mascotas", (req, res) => {
  res.render("mascotas", {
    titulo: "mi titulo dinámico - servicios",
    arrayMascotas: [
      { id: 1, nombre: "quill", descripcion: "descripcion" },
      { id: 2, nombre: "boris", descripcion: "descripcion" },
    ],
  });
});

module.exports = router;