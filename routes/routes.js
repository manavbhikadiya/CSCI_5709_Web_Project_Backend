const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.helloWorld);
router.post("/signUp", UserController.signUp);
module.exports = router;
