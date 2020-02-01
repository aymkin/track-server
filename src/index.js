const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('../mongodbSensitive')

const app = express()

const mongoUri = mongodb.uri
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance...')
})
mongoose.connection.on('error', err => {
    console.log('Error connecting to mono: ' + err)
})

app.get('/', (req, res) => {
    res.send('Hello express')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
