const mysql = require('mysql');

let host = process.env.DB_HOST
let user = process.env.DB_USER
let database = process.env.DB_DATABASE
let password = process.env.DB_PASS

console.log(host, user, database, password)

if(process.env.NODE_ENV === 'production'){
console.log('production yeet')    
}

const connection = mysql.createConnection({
    host: host,
    user: user,
    database: database,
    password: password
})

connection.connect((err) => {
    if(err) throw err
    console.log('Database mounted')
})

module.exports = connection