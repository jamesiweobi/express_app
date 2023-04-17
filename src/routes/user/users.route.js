const express = require('express')
const { createUserController, getSingleUserController, getUsersController, deleteOneUserController, searchController } = require('../../controllers/user.controller')


const router = express.Router()

// "users/create"
router.post('/create', createUserController)

router.get('/search', searchController)

// "users/list"
router.get('/list', getUsersController)

//"users/:name"
router.get('/:name', getSingleUserController)

//"users/:id"
router.delete('/:id', deleteOneUserController)

module.exports = { userRouter: router };