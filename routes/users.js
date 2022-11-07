import express from 'express'
import { 
    getUsers, 
    createUser, 
    userDetail, 
    deleteUser, 
    updateUser 
} from '../controllers/users.js'

const router = express.Router()

// all the routes are start here with /users
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', userDetail)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router