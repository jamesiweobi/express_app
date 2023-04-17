const express = require('express');
const {userRouter} = require('./src/routes/user/users.route')
const {logUserRequestTimeAndPath} = require('./src/middlewares/logger') 
const morgan = require('morgan')
require('dotenv').config() 

// const {notFound, badRequestError} = require('./src/middlewares/error.utils')
const app = express()
const port = 4000

console.log("Node running env = ", app.get('env'))
//Middleswares

// app.use(badRequestError)
app.use(express.json())
// app.use(logUserRequestTimeAndPath)
app.use(morgan('combined'))

// User Routes
app.use('/users', userRouter)

app.use((err, req, res, next) => {
  return res.status(err.status || 404).json({
    message: err.message,
    status: 'Failed',
    err: process.env.Node_ENV === "development" ? {message: err.message, errorStack: err.stack} : {}
  })
})

app.listen(port, ()=> console.log(`Server listening on port: ${port}`))