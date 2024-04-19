"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserWorkoutProfileInfo } from "./types/UserWorkoutProfileInfo";

export default function Home() {
  const { data: session } = useSession();
  const [workout, setWorkout] = useState(null);
  const [userWorkoutProfile, setUserWorkoutProfile] =
    useState<UserWorkoutProfileInfo | null>(null);

  useEffect(() => {
    const storedWorkout = sessionStorage.getItem("workout");
    setWorkout(storedWorkout ? JSON.parse(storedWorkout) : null);

    axios
      .get("api/checkWorkoutProfile")
      .then((res) => {
        const hasProfile = res.data;
        setUserWorkoutProfile(hasProfile);
      })

      .catch((err) => {
        console.log("this " + err);
      });
  }, []);

  return (
    <>
      {session === null ? (
        <div className="flex flex-col h-96 pt-10 justify-around items-center">
          <h1 className="text-4xl text-center">
            Welcome to Herculean Strength
          </h1>
          <h3 className="text-2xl text-center">
            Your strength journey starts here
          </h3>
          <div className="button-container flex gap-10">
            <Link href="/signup">
              <button className="bg-amber-600 p-2 rounded-xl text-2xl hover:text-white">
                New User
              </button>
            </Link>
            <Link href="/signin">
              <button className="bg-amber-600 p-2 rounded-xl text-2xl hover:text-white">
                Returning User
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-96 pt-10 justify-around items-center">
          <h1 className="text-4xl text-center">Hello {session?.user?.name}!</h1>
          <div className="button-container flex gap-10">
            {!workout && userWorkoutProfile ? (
              <Link href="/preworkout">
                <button className="bg-amber-600 p-2 rounded-xl text-2xl hover:text-white">
                  Start a new workout
                </button>
              </Link>
            ) : workout && userWorkoutProfile ? (
              <Link href="/start-workout">
                <button className="bg-amber-600 p-2 rounded-xl text-2xl hover:text-white">
                  Resume your workout
                </button>
              </Link>
            ) : userWorkoutProfile === null ? (
              ""
            ) : (
              ""
            )}

            <Link href="/dashboard">
              <button className="bg-amber-600 p-2 rounded-xl text-2xl hover:text-white">
                See your previous stats
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
