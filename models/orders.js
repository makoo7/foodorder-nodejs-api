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
    phone_number: {
        type: Number,
        required: true,
        default: 9876543210
    }
})

export default mongoose.model('Order', orderSchema);