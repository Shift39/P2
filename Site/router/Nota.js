var express = require("express");
var router = express.Router();

var notaController = require("../controllers/NotaController");

router.get("/ultimas/:idAluno", function (req, res) {
    notaController.nota(req, res);
});


module.exports = router;