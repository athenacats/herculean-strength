import { dbConnect } from "@/app/lib/mongodb";
import { UserWorkoutProfileModel } from "@/app/models/userWorkoutProfile.model";
import dotenv from "dotenv";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
dotenv.config();

export async function GET(
  error: any,
  req: NextRequest,
  res: NextResponse,
  _next: any
) {
  console.log("here");
  try {
    await dbConnect();

    const session = await getServerSession(authOptions);

    console.log("session: " + session);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Not registered" });
    }

    const user = session?.user?.email;
    console.log(user);

    const userFound = await UserWorkoutProfileModel.findOne({ user: user });
    console.log(userFound);

    if (userFound) {
      return NextResponse.json(userFound);
    } else {
      return NextResponse.json({ error: "Not registered" });
    }
  } catch (error) {
    console.error("Error during save operation:", error);
    return NextResponse.json({ message: "An error occurred" });
  }
}
