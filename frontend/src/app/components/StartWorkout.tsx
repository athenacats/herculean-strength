"use client";

import React, { useEffect, useState } from "react";
import { Timer } from "./Timer";

function StartWorkout() {
  const [workout, setWorkout]: any[] = useState(null);

  useEffect(() => {
    const storedWorkout = sessionStorage.getItem("workout");
    const parsedWorkout = storedWorkout ? JSON.parse(storedWorkout) : null;
    setWorkout(parsedWorkout);
  }, []);
  if (!workout) {
    <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 className="text-4xl text-center mb-8">Start Workout</h1>
        <table className="table-auto border-collapse border border-yellow-500 w-4/6 m-auto">
          <thead>
            <tr>
              <th className="border border-yellow-500 text-2xl">Name</th>
              <th className="border border-yellow-500 text-2xl">Reps</th>
              <th className="border border-yellow-500 text-2xl">Weight</th>
              <th className="border border-yellow-500 text-2xl">
                Actual Weight
              </th>
              <th className="border border-yellow-500 text-2xl">Rest Timer</th>
            </tr>
          </thead>
          <tbody>
            {workout &&
              workout!.exercises.map((exercise: any, index: any) => (
                <tr key={index}>
                  <td className="border border-yellow-500 text-xl">
                    {exercise.name}
                  </td>
                  <td className="border border-yellow-500 text-lg">
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li
                          className=" border-yellow-500 border-b"
                          key={setIndex}
                        >
                          {set.reps}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-yellow-500">
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li
                          className=" border-yellow-500 border-b text-lg"
                          key={setIndex}
                        >
                          {set.weight}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li key={setIndex}>
                          <input
                            type="number"
                            required
                            placeholder={set.weight}
                            className=" border-yellow-500 border-b text-lg"
                          ></input>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {exercise.sets.map((set: any, setIndex: number) => (
                        <li key={setIndex}>
                          <Timer />
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StartWorkout;
