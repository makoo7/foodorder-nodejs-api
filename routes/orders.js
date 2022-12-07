import express from 'express'
import {
    orderItem,
    ordersList,
    deleteOrder
} from '../controllers/orders.js';

const router = express.Router();

router.post('/', orderItem)
router.get('/', ordersList)
router.delete('/:id', deleteOrder)


export default router;