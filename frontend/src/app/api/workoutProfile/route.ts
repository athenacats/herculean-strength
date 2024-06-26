import dotenv from "dotenv";
dotenv.config();
import { NextResponse } from "next/server";
import { dbConnect } from "./../../lib/mongodb";
import { User, UserModel } from "@/app/models/user.model";
import { UserWorkoutProfileModel } from "@/app/models/userWorkoutProfile.model";

export async function POST(req: any, res: any) {
  try {
    await dbConnect();
    const { userName, userEmail, formData } = await req.json();

    const newWorkoutProfile = new UserWorkoutProfileModel({
      user: userEmail,
      sex: formData.sex,
      age: formData.age,
      weightUnits: formData.weightUnits,
      heightUnits: formData.heightUnits,
      weight: formData.weight,
      height: formData.height,
      goals: formData.goals,
      workoutFrequency: formData.workoutFrequency,
      experience: formData.experience,
      currSquatMax: formData.currSquatMax,
      currBenchMax: formData.currBenchMax,
      currDeadliftMax: formData.currDeadliftMax,
      goalSquatMax: formData.goalSquatMax,
      goalBenchMax: formData.goalBenchMax,
      goalDeadliftMax: formData.goalDeadliftMax,
      specialization: formData.specialization,
      notifications: formData.notifications,
    });

    await newWorkoutProfile.save();

    return NextResponse.json({ message: "User workout profile registered" });
  } catch (error) {
    console.error("Error during save operation:", error);
    return NextResponse.json({ message: "An error occured" });
  }
}
