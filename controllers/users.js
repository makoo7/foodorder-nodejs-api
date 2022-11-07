import User from '../models/users.js'

export const getUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.send('Error '+ err);
    }
}

export const createUser = async(req, res) => {
    
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        })

    try{    
        const data = await user.save()
        res.json(data)
    }catch(err){
        res.send('Error'+ err)
    }
}

export const userDetail = async(req, res) => {
    const { id } = req.params
    try{
        const user = await User.findById(id)
        res.json(user)
    }catch(err){
        res.send('Error '+ err)
    }
}

export const deleteUser = async(req, res) => {
    const {id} = req.params
    try{
        const data = await User.findByIdAndDelete(id)
        res.json(data)
    }catch(err){
        res.send('Error '+ err)
    }
}

export const updateUser = async(req, res) => {
    const {id} = req.params
    const {firstName, lastName, age} = req.body

    try{
        const user = await User.findById(id)
        if(firstName) user.firstName = firstName
        if(lastName) user.lastName = lastName
        if(age) user.age = age
        const data = await user.save()

        res.send(data)
    }catch(err){
        res.send('Error '+ err)
    }

    res.send(`User with the id: ${id} has been updated...`)

}