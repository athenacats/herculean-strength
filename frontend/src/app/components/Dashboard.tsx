"use client";

import dotenv from "dotenv";
dotenv.config();

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { dbConnect } from "../lib/mongodb";
import { UserWorkoutProfileModel } from "../models/userWorkoutProfile.model";
import { useState } from "react";
import { NextResponse } from "next/server";

export default function Dashboard() {
  const [userWorkoutProfile, setUserWorkoutProfile] = useState(false);
  const { data: session } = useSession();

  if (session === null) redirect("/signin");

  async function POST(req: any, res: any) {
    try {
      await dbConnect();
      const email = session?.user?.email;

      const user = await UserWorkoutProfileModel.findOne({ email: email });
      console.log(user);
      !user ? setUserWorkoutProfile(false) : setUserWorkoutProfile(true);
    } catch (error) {
      console.error("Error during save operation:", error);
      return NextResponse.json({ message: "An error occured" });
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      redirect("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col justify-between h-96 items-center">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => handleSignOut()}
          className="bg-amber-600 p-2 rounded-xl "
        >
          Log Out
        </button>
      </div>
      {userWorkoutProfile === false ? (
        <Link href="/newuser">
          <button className="m-auto border-solid border-b-2 border-amber-600 hover:text-xl">
            New Here? Lets set up your profile!
          </button>
        </Link>
      ) : (
        <div>
          <h2>Your Data</h2>
        </div>
      )}
    </div>
  );
}
