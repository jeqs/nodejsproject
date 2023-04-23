const express = require("express");
const router = express.Router();
const Mascota = require("../models/mascotas");

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
    console.log("Error al tratar de obtener la colección :", error);
  }
});

// list mascotas
router.get("/mascotas", (req, res) => {
  res.render("mascotas", {
    titulo: "mi titulo dinámico - servicios",
    arrayMascotas: [
      { id: 1, nombre: "quill", descripcion: "descripcion" },
      { id: 2, nombre: "boris", descripcion: "descripcion" },
    ],
  });
});

// list mascotas
router.get("/crear", (req, res) => {
  res.render("crear", {
    titulo: "Crear - Mascota",
  });
});

// list mascotas
router.post("/crear", async (req, res) => {
  const body = req.body;
  //console.log(body);
  try {
    // metodo 1
    // const mascotaDB = new Mascota(body);
    // await mascotaDB.save();
    //console.log("Mascota creada :", mascotaDB);

    // metodo 2
    await Mascota.create(body);
    res.redirect("/mascotas");
  } catch (error) {
    console.log("Error al tratar de crear elemento de la colección :", error);
  }
});

module.exports = router;
