"use client";
import React, { useEffect, useState } from "react";
import {
  energyOptions,
  nutritionOptions,
  preworkoutData,
  readinessOptions,
} from "../types/preWorkoutTypes";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserWorkoutProfileInfo } from "../types/UserWorkoutProfileInfo";

export default function PreWorkout() {
  const [nutrition, setNutrition] = useState(2);
  const [nutritionLabel, setNutritionLabel] = useState("Okay");
  const [energy, setEnergy] = useState(2);
  const [energyLabel, setEnergyLabel] = useState("Okay");
  const [readiness, setReadiness] = useState(2);
  const [readinessLabel, setReadinessLabel] = useState("Okay");
  const router = useRouter();
  const [userWorkoutProfile, setUserWorkoutProfile] =
    useState<UserWorkoutProfileInfo | null>(null);

  const handleNutritionChange = (e: any) => {
    const selectedValue = parseInt(e.target.value, 10);

    setNutrition(selectedValue);
    const selectedLabel = nutritionOptions.find(
      (option) => option.value === selectedValue
    )?.label!;
    setNutritionLabel(selectedLabel);
  };

  const handleEnergyChange = (e: any) => {
    const selectedValue = parseInt(e.target.value, 10);
    setEnergy(selectedValue);
    const selectedLabel = energyOptions.find(
      (option) => option.value === selectedValue
    )?.label!;
    setEnergyLabel(selectedLabel);
  };

  const handleReadinessChange = (e: any) => {
    const selectedValue = parseInt(e.target.value, 10);
    setReadiness(selectedValue);
    const selectedLabel = readinessOptions.find(
      (option) => option.value === selectedValue
    )?.label!;
    setReadinessLabel(selectedLabel);
  };

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
        router.push("/");
      });
  }, []);

  const handleSubmit = () => {
    const value = (nutrition + energy + readiness) / 3;
    const data: preworkoutData = {
      value,
      workoutProfile: userWorkoutProfile,
    };

    console.log(data);
    /*const preWorkoutData = {
      nutrition,
      energy,
      readiness,
    };*/
    localStorage.setItem("preWorkoutData", JSON.stringify(data));
    router.replace("start-workout");
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
              Nutrition:
            </label>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={nutrition}
              id="nutrition"
              list="markers"
              name="nutrition"
              onChange={handleNutritionChange}
              className=" h-4 w-72 rounded bg-gray-700 outline-none focus:ring-4 focus:ring-
          purple-300 focus:border-purple-300 shadow-md"
            />
            <datalist
              id="markers"
              className=" flex relative text-sm justify-between"
            >
              {nutritionOptions.map((option) => (
                <option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </datalist>
            <p>Value : {nutritionLabel}</p>
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
        <div className=" flex flex-col items-center">
          <div className="">
            <label className="text-center text-lg font-semibold mb-2 block">
              Readiness Levels:
            </label>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={readiness}
              id="readiness"
              list="markers"
              name="readiness"
              onChange={handleReadinessChange}
              className=" h-4 w-72 rounded bg-gray-700 outline-none focus:ring-4 focus:ring-
          purple-300 focus:border-purple-300 shadow-md"
            />
            <datalist
              id="markers"
              className=" flex relative text-sm justify-between"
            >
              {readinessOptions.map((option) => (
                <option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </datalist>
            <p>Value : {readinessLabel}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
            onClick={handleSubmit}
          >
            Take Me To Today&apos;s Workout
          </button>
        </div>
      </div>
    </>
  );
}
