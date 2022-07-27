var express = require("express");
var router = express.Router();


var usuarioController = require("../controllers/UserController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res)
});

router.get("/lista", function (req, res) {
    usuarioController.lista(req, res)
});


router.post("/sign", function (req, res) {
    usuarioController.sign(req, res)
})

router.post("/log", function (req, res) {
    usuarioController.log(req, res)
});

module.exports = router;