const express = require('express');
const {userRouter} = require('./src/routes/user/users.route')
const {logUserRequestTimeAndPath} = require('./src/middlewares/logger')  

const app = express()
const port = 4000

//Middleswares
app.use(express.json())
app.use(logUserRequestTimeAndPath)

// User Routes
app.use('/users', userRouter)


app.listen(port, ()=> console.log(`Server listening on port: ${port}`))