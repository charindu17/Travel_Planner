const express = require("express");
const router = express.Router();

//insert model
const User = require("../Model/UserModel");
//insert controller
const UserController = require("../Controllers/UserController");

router.get("/",UserController.getAllUsers);

//export router
module.exports = router;