"use client";
import React, { useState } from "react";
import { energyOptions, moodOptions } from "../types/preWorkoutTypes";

export default function PreWorkout() {
  const [mood, setMood] = useState(2);
  const [moodLabel, setMoodLabel] = useState("Okay");
  const [energy, setEnergy] = useState(2);
  const [energyLabel, setEnergyLabel] = useState("Okay");

  const handleMoodChange = (e: any) => {
    const selectedValue = parseInt(e.target.value, 10);
    setMood(selectedValue);
    const selectedLabel = moodOptions.find(
      (option) => option.value === selectedValue
    )?.label!;
    setMoodLabel(selectedLabel);
  };

  const handleEnergyChange = (e: any) => {
    const selectedValue = parseInt(e.target.value, 10);
    setEnergy(selectedValue);
    const selectedLabel = energyOptions.find(
      (option) => option.value === selectedValue
    )?.label!;
    setEnergyLabel(selectedLabel);
  };

  return (
    <>
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
            <p>Value : {moodLabel}</p>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div className="">
            <label className="text-center text-lg font-semibold mb-2 block">
              Energy Levels:
            </label>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={energy}
              id="energy"
              list="markers"
              name="energy"
              onChange={handleEnergyChange}
              className=" h-4 w-72 rounded bg-gray-700 outline-none focus:ring-4 focus:ring-
          purple-300 focus:border-purple-300 shadow-md"
            />
            <datalist
              id="markers"
              className=" flex relative text-sm justify-between"
            >
              {energyOptions.map((option) => (
                <option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </datalist>
            <p>Value : {energyLabel}</p>
          </div>
        </div>
      </div>
    </>
  );
}
