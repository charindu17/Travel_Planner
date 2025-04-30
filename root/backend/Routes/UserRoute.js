const express = require("express");
const router = express.Router();

//insert model
const User = require("../Model/UserModel");
//insert controller
const UserController = require("../Controllers/UserController");

router.get("/getUsers",UserController.getAllUsers);
router.post("/addUser",UserController.addUsers);
router.get("/getUserByID/:id",UserController.getUserByID);
router.put("/updateUserByID/:id",UserController.updateUser);
router.delete("/deleteUserByID/:id",UserController.deleteUser);

//export router
module.exports = router;