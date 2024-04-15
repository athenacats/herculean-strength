import mongoose, { Schema, model, models } from "mongoose";
import { User } from "./user.model";

type Exercise = {
  units: string;
  name: string;
  sets: Array<{
    reps: number;
    weight: number;
  }>;
};
interface WorkoutDetails {
  user: string;
  date: Date;
  exercises: Exercise[];
}

const workoutDetailsSchema = new Schema<WorkoutDetails>(
  {
    user: { type: String, required: true },
    date: { type: Date, default: Date.now },
    exercises: [
      {
        units: { type: String, required: true },
        name: { type: String, required: true },
        sets: [
          {
            reps: { type: Number, required: true },
            weight: { type: Number, required: true },
          },
        ],
      },
    ],
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

export const WorkoutDetailsModel =
  mongoose.models["WorkoutDetails"] ||
  mongoose.model<WorkoutDetails>("WorkoutDetails", workoutDetailsSchema);
