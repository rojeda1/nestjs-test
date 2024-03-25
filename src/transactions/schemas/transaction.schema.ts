import * as mongoose from 'mongoose';

export const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    deletedAt: { type: Date },
  },
  { timestamps: true },
);
