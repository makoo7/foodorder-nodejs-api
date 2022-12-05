import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    items: {
        type: Object,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
})

export default mongoose.model('Order', orderSchema);