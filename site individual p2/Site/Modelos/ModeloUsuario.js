var database = require("../Database/config")

function lista() {
    console.log('modelo acessado com sucesso');
    var instrucao = `SELECT * FROM usuario`;
    console.log("Executando instrução VOCÊ TA QUASE: \n" + intrucao);
    return database.conectado(instrucao);

    
}

function login(email, senha) {
    console.log("Executando modelo part 1")
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando instrução VOCÊ TA QUASE: \n" + intrucao);
    return database.conectado(instrucao);
}

function sign(email, nome, senha) {
    console.log("Executando modelo part 2")
    var instrucao = `INSERT INTO usuarios(email, nome, senha) VALUES ('${email}', '${nome}', '${senha}') `
    console.log("Executando instrução VOCÊ TA QUASE: \n" + intrucao);
    return database.conectado(instrucao);
}

module.exports = {
    login,
    sign,
    lista
};