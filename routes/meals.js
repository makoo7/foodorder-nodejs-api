import express from 'express';
import { 
    getMeals, 
    storeMeal,
    readMeal,
    updateMeal,
    deleteMeal 
} from '../controllers/meals.js';

const router = express.Router();

router.get('/', getMeals)
router.post('/', storeMeal)
router.get('/:id', readMeal)
router.patch('/:id', updateMeal)
router.delete('/:id', deleteMeal)

export default router