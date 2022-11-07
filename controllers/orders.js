import Order from '../models/orders.js';

export const orderItem = async(req, res) => {
    const { items, total_amount, phone_number } = req.body
    const order = new Order({
        items: items,
        total_amount: total_amount,
        phone_number: phone_number
    })

    try{
        const data = await order.save()
        res.json(data)
    }catch(err){
        res.send('Error '+ err)
    }
}

export const ordersList = async(req, res) => {
    try{
        const data = await Order.find()
        res.json(data)
    }catch(err){
        res.send('Error '+ err)
    }
}