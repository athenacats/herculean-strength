import { dbConnect } from "@/app/lib/mongodb";
import { UserWorkoutProfileModel } from "@/app/models/userWorkoutProfile.model";
import dotenv from "dotenv";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
dotenv.config();

export async function GET(req: any, res: any) {
  try {
    await dbConnect();
    const session = await getSession({ req });

    if (!session || !session.user) {
      return res.status(401).json({ error: "Not registered" });
    }

    const email = session?.user?.email;

    const user = await UserWorkoutProfileModel.findOne({ email: email });

    user
      ? res.status(200).json(user)
      : res.status(404).json({ error: "Not registered" });
  } catch (error) {
    console.error("Error during save operation:", error);
    return NextResponse.json({ message: "An error occured" });
  }
}
