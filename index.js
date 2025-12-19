const express = require("express");
const app = express();
app.use(express.json());
const dbconnection = require("./config/dbconnection.config");
require("dotenv").config();
dbconnection();
app.listen(process.env.port, () => {
  console.log("server running", process.env.port);
});
