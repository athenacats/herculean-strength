import { UserWorkoutProfileInfo } from "../types/UserWorkoutProfileInfo";
import mongoose, { Schema, model, models } from "mongoose";

export const userWorkoutProfileSchema = new Schema<UserWorkoutProfileInfo>(
  {
    user: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true },
    heightUnits: { type: String, required: true },
    weightUnits: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    goals: { type: String, required: true },
    workoutFrequency: { type: String, required: true },
    experience: { type: String, required: true },
    currSquatMax: { type: Number, required: true },
    currBenchMax: { type: Number, required: true },
    currDeadliftMax: { type: Number, required: true },
    goalSquatMax: { type: Number, required: true },
    goalBenchMax: { type: Number, required: true },
    goalDeadliftMax: { type: Number, required: true },
    specialization: { type: String, required: true },
    notifications: { type: String, required: true },
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

export const UserWorkoutProfileModel =
  mongoose.models["userWorkoutProfile"] ||
  mongoose.model<UserWorkoutProfileInfo>(
    "userWorkoutProfile",
    userWorkoutProfileSchema
  );
