require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database')

app.get('/', (req, res) => {
    res.status(200).send('Peepeepoopoo').end()
})

app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (err, result) => {
        if(err) throw err
        res.status(200).send(result).end()
    })
})

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is running on port ${PORT}`))