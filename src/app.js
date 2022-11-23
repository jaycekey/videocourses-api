require("dotenv").config();
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error.middleware");

const { userRoutes, courseRoutes, categoryRoutes, videoRoutes } = require("./routes");
const app = express();

app.use(express.json());
initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Sincronizado correctamente"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server " });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", courseRoutes);
app.use("/api/v1", videoRoutes);

app.use(handleError);

module.exports = app;
