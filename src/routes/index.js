import express from "express"
import UserController from '../controller/UserController'

let router = express.Router()

const initWebRouter = (app) => {
    router.get('/user/helloworld', UserController.helloWorld)
    router.get('/user/get-users', UserController.getUsers)
    router.get('/user/get-user/:id', UserController.getUser)
    router.post('/user/create-user', UserController.createUser)
    router.put('/user/update-user', UserController.updateUser)
    router.delete('/user/delete-user/:id', UserController.deleteUser)
    return app.use('/', router)
}

module.exports = initWebRouter