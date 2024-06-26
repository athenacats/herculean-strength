import dotenv from "dotenv";
dotenv.config();
import { NextResponse } from "next/server";
import { dbConnect } from "./../../lib/mongodb";
import { User, UserModel } from "@/app/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(req: any, res: any) {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();

    /*const user = await UserModel.findOne({ email });
    if (user) {
      res.status(400).send("User already esist");
      return;
    }*/
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      id: "",
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      isAdmin: false,
    });

    await newUser.save();

    return NextResponse.json({ message: "User registered" });
  } catch (error) {
    return NextResponse.json({ message: "An error occured" });
  }
}
