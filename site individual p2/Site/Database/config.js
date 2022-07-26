var mysql = require("mysql2");
var sql = require('mssql');


const { threadId } = require('worker_threads');
const { resolve } = require("path");

var mySqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'MIrai123@',
    database: 'P2'
};

function conectado(instrucao) {

    return new Promise(function (resolve, reject) {
    var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao, function(erro, resultados){
            conexao.end();
            if (erro) {
                reject(erro);
                console.log(erro)
                
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('Erro', function (errp) {
            return ("ERRO no Mysql Workbench (local): ", erro.sqlMessage)
            
        })

    });

    /*var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
            });*/
    
}




module.exports = {
    conectado
}


/*connection.connect(function (err){

    if (err) {
        console.error('Erro ao conectar: ' + err.stack);
        return;
        
    }
    console.log('Conectado como id ' + connection,threadId)
});
connection.query("INSET INTO usuario(nome, email, senha) VALUES ")*/