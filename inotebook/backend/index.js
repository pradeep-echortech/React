// const connectToMongo = require('./db');
const express = require('express')
const mongoose=require('mongoose')

const app = express()
app.use(express.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/')

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello pradeep!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})