const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");

// db.createUser({
//     user: "crypto-db-1233",
//     pwd: "crypto-db-1233",
//     roles: [{role: "dbOwner", db: "crypto-db-1233"}]
// })
dotenv.config();
const app = express();

mongoose
  .connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log(
      `Conectado a MongoDB: ${process.env.DB_HOSTNAME}:${process.env.DB_PORT}`
    );
    app.listen(process.env.PORT, () => {
      console.log(`Escuchando en el puerto: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", apiRoutes);
