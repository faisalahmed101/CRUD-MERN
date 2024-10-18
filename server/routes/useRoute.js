import express from 'express'
import { allUsers, create } from '../controllers/userControler.js'

const route = express.Router()

route.post('/create', create)
route.get('/users', allUsers)

export default route

