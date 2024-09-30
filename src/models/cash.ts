import mongoose, { Schema, model } from 'mongoose';

const cashSchema = new Schema(
    {
        owner: String,
        type: String,
        amount: Number,
        description: String
    },
    {
        timestamps: true
    }
);

export default mongoose.models.cashes || model('cashes', cashSchema);