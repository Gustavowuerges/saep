const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
  host: 'localhost',
  user: 'root',               // Utilizador do SQL
  password: 'sua_password',   // Palavra-passe do SQL
  database: 'nome_da_bd',     // Nome da base de dados
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = conexao;