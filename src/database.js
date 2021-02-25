const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
})

connection.connect((err) => {
    if(err) throw err
    console.log('Database mounted')
})

module.exports = connection