import mongoose from 'mongoose';

const earningSchema = mongoose.Schema({
    title: { type: String, required: true },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    source: { type: String, required: true },
    amount: { type: Number, required: true },
    frequency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Frequency',
        required: true
    },
    isFixed: { type: Boolean, required: true }
}, {
    collection: 'earnings',
    id: false
});

export default mongoose.model('Earning', earningSchema);