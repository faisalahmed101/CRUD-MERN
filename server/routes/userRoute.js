import express from 'express'
import { allUsers, create, deleteUser, getOneUser, updateUser } from '../controllers/userControler.js'

const route = express.Router()

route.post('/create', create)
route.get('/users', allUsers)
route.get('/user/:id', getOneUser)
route.put('/update/:id', updateUser)
route.delete('/delete/:id', deleteUser)

export default route

