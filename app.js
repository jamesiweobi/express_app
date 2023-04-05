const express = require('express');
// const bodyParser = require("body-parser")

const database = {}

const app = express()
const port = 4000

// app.use(bodyParser())

app.get('/', (req, res) => {
  return res.send('HELLO WORLD!')
})

app.post('/new_post', (req, res) => {
  console.log(req.body)
  const newPostDate = req.body
  database['new_post'] = newPostDate
  res.send('New Tweet saved')
})

app.get('/home', (req, res) => {
  return res.send('HELLO HOME PAGE!')
})


app.listen(port, ()=> console.log(`Server listening on port: ${port}`))