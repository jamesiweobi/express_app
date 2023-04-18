const express = require('express')
const { createUserController, getSingleUserController, getUsersController, deleteOneUserController, searchController, updateSingleUser } = require('../../controllers/user.controller')


const router = express.Router()

// "users/create"
router.post('/create', createUserController)

router.get('/search', searchController)

//Update a User by the user index
router.put('/update/:id', updateSingleUser)

// "users/list"
router.get('/list', getUsersController)

//"users/:name"
router.get('/:name', getSingleUserController)

//"users/:id"
router.delete('/:id', deleteOneUserController)

module.exports = { userRouter: router };