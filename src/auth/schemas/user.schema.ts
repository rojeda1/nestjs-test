import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    deletedAt: { type: Date },
  },
  { timestamps: true },
);
