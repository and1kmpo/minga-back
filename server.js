import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import indexRouter from "./router/index.js";
import cors from "cors";
import morgan from "morgan";
import error_handler from "./middlewares/error_handler.js";
import not_found_handler from "./middlewares/not_found_handler.js";

const server = express(); //Crear servidor
const PORT = process.env.PORT || 8080; // Establecer PORT
const ready = () => {
  console.log("Ready on " + PORT);
};

//Middlewares
server.use(express.json()); //permite entradas y también trabajar con formato json
server.use(express.urlencoded({ extended: true })); //permite capturar consultas complejas
server.use(cors()); //para permitir orígenes cruzados (front/back)
server.use(morgan("dev")); ////para registrar peticiones HTTP

//Router + Server
server.use("/api", indexRouter);
server.use(not_found_handler);
server.use(error_handler);
server.listen(PORT, ready); //Iniciar server

// console.log(process.env.NODE_ENV);
