const express = require('express');
// const bodyParser = require("body-parser")

const database = {}

const app = express()
const port = 4000

app.use(express.json())


const users = [
{
  name: 'John',
  sex: 'male',
  age: 46
},
{
  name: 'Anne',
  sex: 'female',
  age:78
},
{
  name: 'Prosper',
  sex: 'male',
  age: 40
},
{
  name: 'Ada',
  sex: 'female',
  age: 19
}
]




// app.use(bodyParser())

app.delete('/:id', (req, res) => {
  return res.send('HELLO WORLD!')
})

app.post('/new_post', (req, res) => {
  console.log(req.body)
  const newPostDate = req.body
  database['new_post'] = newPostDate
  res.json('New Tweet saved')
})

const getUserController =  (req, res) => {
  const name = req.params.name

  if(!name) return res.status(404).json({
    status: 'failed',
    message: 'Please pass in a user name',
  })

  const user = users.find(user => user.name.toLowerCase() == name.toLowerCase())

  if(!user) return res.status(404).json({
    status: 'failed',
    message: 'User not found',
  })

  return res.json({
    status: 'success',
    message: 'User found',
    user
  })
}
// This is the endpoing that will return a single user once their name is matched.

app.get('/user/:name', getUserController)

const createUserController =  (req, res) => {
  const userObject = req.body
  users.push(userObject)
  res.status(201).json({
    status: 'success',
    message: 'User Created',
    users
  })
}


app.post('/user', createUserController)


app.get('/users', (req, res) => {
  res.json({
    status: 'success',
    message: users.length < 1 ? "Users not found" :  "Users found",
    users
  })
})



app.post('/home', (req, res) => {
  return res.send('HELLO HOME PAGE! FROM THE POST ROUTE')
})


app.listen(port, ()=> console.log(`Server listening on port: ${port}`))