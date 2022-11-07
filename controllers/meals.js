import Meal from '../models/meals.js'

export const getMeals = async(req, res) => {
    try{
        const Meals = await Meal.find()
        res.json(Meals)
    }catch(err){
        res.send('Error '+err)
    }
}

export const storeMeal = async(req, res) => {
    const meal = new Meal({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
    try{
        const data = await meal.save()
        res.json(data)
    }catch(err){
        res.send('Error '+err)
    }
}

export const readMeal = async(req, res) => {
    const {id} = req.params
    try{
        const data = await Meal.findById(id)
        res.json(data)
    }catch(err){
        res.send('Error '+err)
    }
}

export const updateMeal = async(req, res) => {
    const {id} = req.params
    const {name, description, price} = req.body
    try
    {
        const meal = await Meal.findById(id)
        if(name) meal.name = name
        if(description) meal.description = description
        if(price) meal.price = price
        
        const data = await meal.save()
        res.json(data)
    }catch(err){
        res.send('Error '+ err)
    }
}

export const deleteMeal = async(req, res) => {
    const {id} = req.params
    try{
        const meal = await Meal.findByIdAndDelete(id)
        res.json(meal)
    }catch(err){
        res.send('Error '+ err)
    }
}