const router = require('express').Router()
const controller = require("../controller/controller");
const auth = require('../middleware/auth')

// here the login is the endpoint of the api 
router.post("/registerUser",controller.registerUser);
router.post("/login",controller.login);
router.delete("/delete", auth, controller.delete);
router.post("/addProduct", auth, controller.addProduct);
router.delete("/deleteProduct", auth, controller.deleteProduct);

module.exports = router;