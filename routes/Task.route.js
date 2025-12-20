const express = require("express");
const router = express.Router();
const  createtasks  = require("../controllers/Task.controller");

// http://localhost:8081/tasks/create
router.post("/create", createtasks);


module.exports = router;
