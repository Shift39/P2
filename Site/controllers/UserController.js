var ModeloUsuario = require("../Modelos/ModeloUsuario");

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function lista(req, res) {
    ModeloUsuario.lista()
     .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
            
        }else{
            res.status(204).send("Nenhum resultado compativel")
        }
        
     }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
     );
}

function log(params) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {


        ModeloUsuario.login(email, senha)
        .then(
        function (resultado) {
            console.log(`Compativeis: ${resultado.length}`);
            console.log(`REsultados: ${JSON.stringify(resultado)}`);

            if (resultado.length == 1) {
                console.log(resultado);
                res.json(resultado[0]);

                
            }else if (resultado.length == 0) {
                res.status(403).send("Email e/ou senha invalidos");
            } else {
                res.status(403).send("Mais de um resultado compativel");
            }


        }
        ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
    
}

function sign(params) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido")

    } else if (email == undefined) {
        res.status(400).send("Seu email esta indefinido")
        
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida")
    } else  {
        ModeloUsuario.sign(email, nome, senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }

        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }

    




}

module.exports = {
    testar,
    sign,
    log,
    lista
}