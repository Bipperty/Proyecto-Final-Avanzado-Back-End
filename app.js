// Requerimiento de módulos
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const DBConnection = require("./config/DB");

dotenv.config();
const port = process.env.PORT_SERVER || 4500;

// Habilito el formato JSON

app.use(express.json({ extend: true }));

// Llamado a la conexión con MongoDB
DBConnection();

// Define Controladores

const home = require("./Routes/home");
const products = require("./Routes/products");

// Define Controladores Admin

// Define las rutas FullAccess

app.use("/api", home);
app.use("/api/productos", products);
app.use("/api/usuarios", require("./Routes/users")); // Para probar la DB

// Define las rutas Users

// Define las rutas Admin

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});