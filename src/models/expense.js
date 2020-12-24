import mongoose from 'mongoose';

import { CATEGORIES, CLASSES } from '../utils/constants.js';

const expenseSchema = mongoose.Schema({
    title: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    supplier: String,
    amout: { type: Number, required: true },
    class: {
        type: String,
        enum: CLASSES,
        required: true
    },
    category: {
        type: String,
        ref: CATEGORIES,
        required: true
    },
    Frenquency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Frenquency',
        required: true
    },
    numberPayers: { type: Number, default: 1 },
    isFixed: { type: Boolean, required: true }
}, {
    collection: 'expenses',
    id: false
});

export default mongoose.model('Expense', expenseSchema);