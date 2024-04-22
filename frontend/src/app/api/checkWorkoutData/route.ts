import { dbConnect } from "@/app/lib/mongodb";
import { UserWorkoutProfileModel } from "@/app/models/userWorkoutProfile.model";
import dotenv from "dotenv";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";
import { WorkoutDetailsModel } from "@/app/models/workoutDetails";
dotenv.config();

export async function GET(
  error: any,
  req: NextRequest,
  res: NextResponse,
  _next: any
) {
  try {
    await dbConnect();

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not registered" });
    }

    const user = session?.user?.email;

    const userFound = await WorkoutDetailsModel.find({ user: user });
    console.log(userFound);
    if (userFound) {
      return NextResponse.json(userFound);
    } else {
      return NextResponse.json({ error: "No previous workouts" });
    }
  } catch (error) {
    console.error("Error during save operation:", error);
    return NextResponse.json({ message: "An error occurred" });
  }
}
