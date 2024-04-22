import dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import { UserWorkoutProfileModel } from "@/app/models/userWorkoutProfile.model";

export async function DELETE(req: any, res: any) {
  try {
    await dbConnect();

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Not registered" });
    }

    const user = session?.user?.email;

    const deletion = await UserWorkoutProfileModel.deleteMany({ user: user });
    if (deletion.deletedCount > 0) {
      return NextResponse.json({
        message: `${deletion.deletedCount} user profiles deleted`,
      });
    } else {
      return NextResponse.json({ error: "User profile not found" });
    }
  } catch (error) {
    console.error("Error during delete operation:", error);
    return NextResponse.json({ message: "An error occurred" });
  }
}
