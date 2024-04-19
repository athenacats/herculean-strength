"use client";

import React, { useEffect, useState } from "react";
import { Timer } from "./Timer";
import { Button } from "react-bootstrap";
import axios from "axios";
import { UserWorkoutProfileInfo } from "../types/UserWorkoutProfileInfo";
import { useRouter } from "next/navigation";

function StartWorkout() {
  const [workout, setWorkout]: any[] = useState(null);
  const [userWorkoutProfile, setUserWorkoutProfile] =
    useState<UserWorkoutProfileInfo | null>(null);
  const [inputValues, setInputValues] = useState<Array<number | string>>([]);
  const router = useRouter();

  const handleInputChange = (index: number, value: number | string) => {
    setInputValues((prevState) => {
      const newValues = [...prevState];
      newValues[index] = value;
      return newValues;
    });
  };

  useEffect(() => {
    const storedWorkout = sessionStorage.getItem("workout");
    const parsedWorkout = storedWorkout ? JSON.parse(storedWorkout) : null;
    setWorkout(parsedWorkout);

    axios
      .get("api/checkWorkoutProfile")
      .then((res) => {
        const hasProfile = res.data;
        setUserWorkoutProfile(hasProfile);
      })

      .catch((err) => {
        console.log("this " + err);
        router.push("/");
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedWorkout = workout.exercises.map((exercise: any) => ({
      ...exercise,
      sets: exercise.sets.map((set: any, setIndex: number) => ({
        ...set,
        weight: Number(inputValues[setIndex]) || set.weight,
      })),
    }));

    const workoutDetails = {
      userEmail: userWorkoutProfile?.user,
      date: new Date(),
      exercises: updatedWorkout,
    };

    axios
      .post("/api/saveWorkout", { workoutDetails })
      .then(() => sessionStorage.removeItem("workout"))
      .then(() => router.replace("dashboard"))
      .catch((error) => {
        console.error("Error saving workout details:", error);
      });
  };

  const renderTimersForSets = (exerciseSets: any[]) => {
    return exerciseSets.map((set: any, setIndex: number) => (
      <Timer key={setIndex} />
    ));
  };

  if (!workout) {
    <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center my-8">Start Workout</h1>
        <table className="table-auto border-collapse border border-yellow-500 w-4/6 m-auto">
          <thead>
            <tr>
              <th className="border border-yellow-500 text-2xl">Name</th>
              <th className="border border-yellow-500 text-2xl">Reps</th>
              <th className="border border-yellow-500 text-2xl">
                Weight ({workout.exercises[0].units})
              </th>
              <th className="border border-yellow-500 text-2xl">
                Actual <br /> Weight ({workout.exercises[0].units})
              </th>
              <th className="border border-yellow-500 text-2xl">Rest Timer</th>
            </tr>
          </thead>
          <tbody>
            {workout &&
              workout!.exercises.map((exercise: any, index: any) => (
                <tr className="" key={index}>
                  <td className="py-4 border border-yellow-500 text-xl">
                    {exercise.name}
                  </td>
                  <td className="border border-yellow-500 text-lg">
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li
                          className="py-4  border-yellow-500 border-b text-center"
                          key={setIndex}
                        >
                          {set.reps}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className=" border border-yellow-500 text-lg">
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li
                          className="py-4 text-center border-yellow-500 border-b text-lg"
                          key={setIndex}
                        >
                          {set.weight}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className=" border border-yellow-500 text-lg">
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li key={setIndex}>
                          <input
                            type="number"
                            required
                            onChange={(e) =>
                              handleInputChange(setIndex, e.target.value)
                            }
                            placeholder={set.weight}
                            className="text-center py-4 border-yellow-500 border-b text-lg w-full"
                          ></input>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-yellow-500 text-lg">
                    <ul className=" ">{renderTimersForSets(exercise.sets)}</ul>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Button
          onClick={handleSubmit}
          className="my-8 text-2xl p-2 rounded-xl bg-amber-600 "
        >
          Complete Workout
        </Button>
      </div>
    );
  }
}

export default StartWorkout;
