const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

//setup express app
const app = express()

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    console.log('connected to mongo')
)
//middleware
app.use(bodyParser.json())
//initial routes
app.use('/api', require('./routes/api'))
//error handler
app.use((err, req, res, next)=> {
    res.status(422).send({error: err.message})
})

app.listen(5000)