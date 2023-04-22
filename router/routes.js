const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascotas");
const ip = require("ip");

// dinamic content index
router.get("/", (req, res) => {
  //console.log("Respuesta del Servidor Render...");
  console.log(`Escuchando en la IP ${ip.address()}`);
  //res.end("Your IP address is " + ip.address());
  res.render("index", { titulo: "mi titulo dinámico - index" });
});

// dinamic content servicios
router.get("/servicios", (req, res) => {
  //console.log("Respuesta del Servidor Render...");
  res.render("servicios", { titulo: "mi titulo dinámico - servicios" });
});

// dinamic content mascotas MongoDB
router.get("/mascotas", async (req, res) => {
  try {
    const arrayMascotaDB = await Mascota.find();
    //console.log("arrayMascotaDB" + arrayMascotaDB);
    res.render("mascotas", {
      titulo: "mi titulo dinámico - mascotas MongoDB",
      arrayMascotas: arrayMascotaDB,
    });
  } catch (error) {
    console.log("Error al tratar de obtener la colección :" + error);
  }
});

// list
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
