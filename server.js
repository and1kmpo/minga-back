import express from "express";
import "dotenv/config.js";
import "./config/database.js";

const server = express(); //Crear servidor

const PORT = process.env.PORT || 8080; // Establecer PORT

const ready = () => {
  console.log("Ready on " + PORT);
};

server.listen(PORT, ready); //Iniciar server

console.log(process.env.NODE_ENV);
