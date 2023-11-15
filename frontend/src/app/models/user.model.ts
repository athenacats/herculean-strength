import mongoose, { Schema, model, models } from "mongoose";

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
}

export const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const UserModel =
  mongoose.models.User || mongoose.model<User>("user", userSchema);
