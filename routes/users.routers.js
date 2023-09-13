const express = require('express')
const userController = require('../contollers/users.controllers')

const usersRouter = express.Router();

usersRouter.get('/', userController.getUsers)
usersRouter.post('/', userController.registerUser)

module.exports = usersRouter;

