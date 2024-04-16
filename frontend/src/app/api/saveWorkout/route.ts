import dotenv from "dotenv";
dotenv.config();
import { NextResponse } from "next/server";
import { dbConnect } from "./../../lib/mongodb";
import { WorkoutDetailsModel } from "@/app/models/workoutDetails";

export async function POST(req: any, res: any) {
  try {
    await dbConnect();
    const { workoutDetails } = await req.json();
    console.log(workoutDetails);

    const newWorkout = new WorkoutDetailsModel({
      user: workoutDetails.userEmail,
      date: workoutDetails.date,
      exercises: workoutDetails.exercises,
    });
    console.log(newWorkout);
    await newWorkout.save();

    return NextResponse.json({ message: "Workout registered" });
  } catch (error) {
    return NextResponse.json({ message: "An error occured" });
  }
}
