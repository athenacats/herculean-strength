"use client";
import React, { useState } from "react";

export default function PreWorkout() {
  const [mood, setMood] = useState(2);

  const handleMoodChange = (e: any) => {
    setMood(e.target.value);
  };
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
            <option label="Very bad" value="0"></option>
            <option label="Bad" value="1"></option>
            <option label="Okay" value="2"></option>
            <option label="Good" value="3"></option>
            <option label="Very good" value="4"></option>
            <option label="Excellent" value="5"></option>
          </datalist>
          <p>Value : {mood}</p>
        </div>
      </div>
    </div>
  );
}
