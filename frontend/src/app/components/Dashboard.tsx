"use client";

import axios from "axios";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { UserWorkoutProfileInfo } from "../types/UserWorkoutProfileInfo";
import { WorkoutDataArray } from "../types/workoutData";

export default function Dashboard() {
  const [userWorkoutProfile, setUserWorkoutProfile] =
    useState<UserWorkoutProfileInfo | null>(null);
  const [dataError, setDataError] = useState("");
  const [workoutDetailsError, setWorkoutDetailsError] = useState("");
  const { data: session } = useSession();
  const [userWorkoutData, setUserWorkoutData] =
    useState<WorkoutDataArray | null>(null);
  const [displayWorkoutData, setDisplayWorkoutData] =
    useState<JSX.Element | null>(null);
  const router = useRouter();
  const [dotsValue, setDotsValue] = useState(0);

  if (session === null) redirect("/signin");

  useEffect(() => {
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

    axios
      .get("api/checkWorkoutData")
      .then((res) => {
        const hasData = res.data;

        setUserWorkoutData(hasData);
      })

      .catch((err) => {
        console.log("this " + err);
        setWorkoutDetailsError("Error loading your data");
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

  const displayWorkout = (index: number) => {
    setDisplayWorkoutData(null);
    const selected = userWorkoutData![index];
    const jsxElement = (
      <>
        <table className="table-auto border-collapse border border-yellow-500 m-auto w-full">
          <thead>
            <tr>
              <th className="border border-yellow-500 text-2xl">Exercise</th>
              <th className="border border-yellow-500 text-2xl">Reps</th>
              <th className="border border-yellow-500 text-2xl">Weight {}</th>
            </tr>
          </thead>
          <tbody>
            {selected!.exercises.map((exercise: any, idx: any) => (
              <tr key={idx}>
                <td className="border border-yellow-500 text-lg">
                  {exercise.sets.map((set: any, setindex: number) => (
                    <p
                      className="py-4 text-center border-yellow-500 border-b text-lg"
                      key={`${idx}-${setindex}`}
                    >
                      {exercise.name}
                    </p>
                  ))}
                </td>
                <td className=" border border-yellow-500 text-lg">
                  {exercise.sets.map((set: any, setindex: number) => (
                    <p
                      className="py-4 text-center border-yellow-500 border-b text-lg"
                      key={`${idx}-${setindex}`}
                    >
                      {set.reps}
                    </p>
                  ))}
                </td>
                <td className=" border border-yellow-500 text-lg">
                  {exercise.sets.map((set: any, setindex: number) => (
                    <p
                      className="py-4 text-center border-yellow-500 border-b text-lg"
                      key={`${idx}-${setindex}`}
                    >
                      {set.weight}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
    setDisplayWorkoutData(jsxElement);
  };

  useEffect(() => {
    if (!userWorkoutProfile) {
      return;
    }
    let bw = userWorkoutProfile!.weight;
    let result: number;
    if (userWorkoutProfile!.weightUnits === "kg") {
      result =
        Number(userWorkoutProfile!.currBenchMax) +
        Number(userWorkoutProfile!.currDeadliftMax) +
        Number(userWorkoutProfile!.currSquatMax);
    } else {
      result =
        (Number(userWorkoutProfile!.currBenchMax) +
          Number(userWorkoutProfile!.currDeadliftMax) +
          Number(userWorkoutProfile!.currSquatMax)) *
        2.2;
    }

    let A, B, C, D, E;
    A = B = C = D = E = 0;
    if (userWorkoutProfile!.sex === "Female") {
      A = -0.0000010706;
      B = 0.0005158568;
      C = -0.1126655495;
      D = 13.6175032;
      E = -57.96288;
    } else {
      A = 0.000001093;
      B = 0.0007391293;
      C = 0.1918759221;
      D = 24.0900756;
      E = 307.75076;
    }
    const dots = Number(
      (
        (result * 500) /
        (A * bw ** 4 + B * bw ** 3 + C * bw ** 2 + D * bw + E)
      ).toFixed(2)
    );

    setDotsValue(dots);
  }, [userWorkoutProfile]);

  const editDetails = () => {
    setDotsValue(0);
    axios
      .delete("api/editDetails")
      .then((res) => {
        console.log(res);
        router.push("/newuser");
      })
      .catch((err) => console.log("this " + err));
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
      {!userWorkoutProfile ? (
        <Link href="/newuser">
          <button className="m-auto border-solid border-b-2 border-amber-600 text-lg hover:text-xl">
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
              <h4 className="text-amber-600 font-bold text-lg">Age:</h4>
              <h4 className="text-lg">{userWorkoutProfile.age}</h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Height:</h4>
              <h4>
                {userWorkoutProfile.height} {userWorkoutProfile.heightUnits}
              </h4>
            </div>
            <div className="flex justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Weight:</h4>
              <h4>
                {userWorkoutProfile.weight} {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Dots:</h4>
              <h4>{dotsValue}</h4>
            </div>
            <div className="flex justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Goals:</h4>
              <h4>{userWorkoutProfile.goals}</h4>
            </div>
            <div className="flex justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Experience:</h4>
              <h4>{userWorkoutProfile.experience}</h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Current Squat Max:</h4>
              <h4>
                {userWorkoutProfile.currSquatMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Current Bench Max:</h4>
              <h4>
                {userWorkoutProfile.currBenchMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">
                Current Deadlift Max:
              </h4>
              <h4>
                {userWorkoutProfile.currDeadliftMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Goal Squat Max:</h4>
              <h4>
                {userWorkoutProfile.goalSquatMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Goal Bench Max:</h4>
              <h4>
                {userWorkoutProfile.goalBenchMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Goal Deadlift Max:</h4>
              <h4>
                {userWorkoutProfile.goalDeadliftMax}{" "}
                {userWorkoutProfile.weightUnits}
              </h4>
            </div>
            <div className="flex  justify-between text-lg">
              <h4 className="text-amber-600 font-bold">Specialization:</h4>
              <h4>{userWorkoutProfile.specialization}</h4>
            </div>
          </div>
          <button
            onClick={editDetails}
            className="my-4 text-lg p-2 rounded-xl bg-amber-600"
          >
            Edit My Details and Goals
          </button>
          <hr className="bg-amber-600 w-full h-0.5" />
        </div>
      )}
      <div className="w-5/6 flex flex-col justify-center items-center gap-6">
        <h2 className="text-2xl text-center font-bold pt-4">
          Your Previous Workouts
        </h2>
        {workoutDetailsError ? (
          <h4 className="text-amber-600 font-bold">{workoutDetailsError}</h4>
        ) : (
          ""
        )}{" "}
        {userWorkoutData === null ? (
          <>
            <h4 className="text-amber-600 font-bold">
              No data to display! Start your first workout!
            </h4>{" "}
            <Link href="/preworkout">
              <button className="bg-amber-600 p-2 rounded-xl">
                Start a new workout
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="flex justify-around w-full flex-wrap">
              {userWorkoutData?.map((data: any, index: number) => (
                <button
                  className="my-4 text-base p-2 rounded-xl bg-amber-600 active:bg-amber-400 focus:bg-amber-400 "
                  key={index}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    displayWorkout(index);
                  }}
                >
                  {new Date(data!.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </button>
              ))}
            </div>
            {displayWorkoutData}
          </>
        )}
      </div>
    </div>
  );
}
