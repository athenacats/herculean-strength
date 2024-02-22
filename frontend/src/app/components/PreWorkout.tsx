"use client";
import React, { useState } from "react";
import { moodOptions } from "../types/preWorkoutTypes";

export default function PreWorkout() {
  const [mood, setMood] = useState(2);
  const [label, setLabel] = useState("Okay");

  const handleMoodChange = (e: any) => {
    //console.log(e.target.value, e.target.label);
    const selectedValue = parseInt(e.target.value, 10);
    setMood(selectedValue);
    const selectedLabel = moodOptions.find(
      (option) => option.value === selectedValue
    )?.label!;
    setLabel(selectedLabel);
  };

  /*const selectedMoodLabel = moodOptions.find(
    (option) => option.value === mood
  )?.label;*/

  return (
    <div className="py-6 flex flex-col items-center w-full">
      <h1 className="font-bold text-xl italic">
        How do you feel today? Be brutally honest
      </h1>
      <div className=" flex flex-col items-center">
        <div className="">
          <label className="text-center text-lg font-semibold mb-2 block">
            Mood:
          </label>
          <input
            type="range"
            min={0}
            max={5}
            step={1}
            value={mood}
            id="mood"
            list="markers"
            name="mood"
            onChange={handleMoodChange}
            className=" h-4 w-72 rounded bg-gray-700 outline-none focus:ring-4 focus:ring-
          purple-300 focus:border-purple-300 shadow-md"
          />
          <datalist
            id="markers"
            className=" flex relative text-sm justify-between"
          >
            {moodOptions.map((option) => (
              <option
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </datalist>
          <p>Value : {label}</p>
        </div>
      </div>
    </div>
  );
}
