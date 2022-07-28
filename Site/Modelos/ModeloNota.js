var database = require("../Database/config")

function nota(idUsuario) {
    instrucaoSql = `select 
                        tentativa, nota
                    from aluno, Tprova
                    where ${idUsuario} = fkAluno `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    nota
}