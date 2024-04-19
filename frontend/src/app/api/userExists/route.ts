import dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "@/app/lib/mongodb";
import { UserModel } from "@/app/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: {
  json: () => PromiseLike<{ email: any }> | { email: any };
}) {
  try {
    await dbConnect();
    const { email } = await req.json();

    const user = await UserModel.findOne({ email }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
