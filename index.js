const express = require("express");
const app = express();
app.use(express.json());
const dbconnection = require("./config/dbconnection.config");
const tasksRoutes = require("./routes/Task.route");
const cors = require("cors");
require("dotenv").config();
dbconnection();

app.use(cors());
app.use("/tasks", tasksRoutes);
app.listen(process.env.port, () => {
  console.log("server running", process.env.port);
});


