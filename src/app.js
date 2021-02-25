require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const connection = require('./database')

app.get('/', (req, res) => {
    res.send('Peepeepoopoo')
})

// app.get('/books', (req, res) => {
//     connection.query('SELECT * FROM books', (err, result) => {
//         if(err) throw err
//         res.json(result)
//     })
// })

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log('Server is running on port 3000'))