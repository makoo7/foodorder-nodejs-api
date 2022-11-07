import express from 'express'
import {
    orderItem,
    ordersList
} from '../controllers/orders.js';

const router = express.Router();

router.post('/', orderItem)
router.get('/', ordersList)


export default router;