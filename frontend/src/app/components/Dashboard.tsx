"use client";

import axios from "axios";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { UserWorkoutProfileInfo } from "../types/UserWorkoutProfileInfo";

export default function Dashboard() {
  const [userWorkoutProfile, setUserWorkoutProfile] =
    useState<UserWorkoutProfileInfo | null>(null);
  const [dataError, setDataError] = useState("");
  const { data: session } = useSession();

  if (session === null) redirect("/signin");

  useEffect(() => {
    // Checking if the user has a workout profile. If not, it will display a message asking them to create one.
    axios
      .get("api/checkWorkoutProfile")
      .then((res) => {
        const hasProfile = res.data;
        setUserWorkoutProfile(hasProfile);
      })

      .catch((err) => {
        console.log("this " + err);
        setDataError("Error loading your data");
      });
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      redirect("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="py-6 flex flex-col justify-between h-full items-center">
      <h1 className="text-4xl">Your Dashboard</h1>
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
      {userWorkoutProfile === null ? (
        <p className="text-2xl text-center font-bold">Loading...</p>
      ) : !userWorkoutProfile.user ? (
        <Link href="/newuser">
          <button className="m-auto border-solid border-b-2 border-amber-600 hover:text-xl">
            New Here? Lets set up your profile!
          </button>
        </Link>
      ) : (
        <div className="w-5/6 flex flex-col justify-center items-center gap-8">
          <h2 className="text-2xl text-center font-bold">Your Data</h2>
          {dataError ? (
            <h4 className="text-amber-600 font-bold">{dataError}</h4>
          ) : (
            ""
          )}
          <div className="text-l w-5/6 flex flex-col gap-2">
            <div className="flex justify-between">
              <h4 className="text-amber-600 font-bold">Age:</h4>
              <h4>{userWorkoutProfile.age}</h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Height:</h4>
              <h4>
                {userWorkoutProfile.height} {userWorkoutProfile.heightUnits}
              </h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-amber-600 font-bold">Weight:</h4>
              <h4>
                {userWorkoutProfile.weight} {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-amber-600 font-bold">Goals:</h4>
              <h4>{userWorkoutProfile.goals}</h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-amber-600 font-bold">Experience:</h4>
              <h4>{userWorkoutProfile.experience}</h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Current Squat Max:</h4>
              <h4>
                {userWorkoutProfile.currSquatMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Current Bench Max:</h4>
              <h4>
                {userWorkoutProfile.currBenchMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">
                Current Deadlift Max:
              </h4>
              <h4>
                {userWorkoutProfile.currDeadliftMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Goal Squat Max:</h4>
              <h4>
                {userWorkoutProfile.goalSquatMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Goal Bench Max:</h4>
              <h4>
                {userWorkoutProfile.goalBenchMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Goal Deadlift Max:</h4>
              <h4>
                {userWorkoutProfile.goalDeadliftMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between">
              <h4 className="text-amber-600 font-bold">Specialization:</h4>
              <h4>{userWorkoutProfile.specialization}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
