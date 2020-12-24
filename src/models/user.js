import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
}, {
    collection: 'users',
    id: false
});

userSchema.virtual('expenses', {
    ref: 'Expenses',
    localField: '_id',
    foreignField: 'user',
    justOne: false
});

userSchema.virtual('earnings', {
    ref: 'Earning',
    localField: '_id',
    foreignField: 'user',
    justOne: false
});

export default mongoose.model('User', userSchema);