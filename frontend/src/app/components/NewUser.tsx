"use client";
import React, { useState } from "react";

export default function NewUser() {
  const [formData, setFormData] = useState({
    sex: "",
    age: "",
    heightUnits: "cm",
    weightUnits: "kg",
    weight: "",
    height: "",
    goals: "",
    workoutFrequency: "",
    experience: "",
    currSquatMax: "60",
    currBenchMax: "40",
    currDeadliftMax: "100",
    goalSquatMax: "",
    goalBenchMax: "",
    goalDeadliftMax: "",
    specialization: "",
    notifications: "true",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    console.log("1", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Sex:</label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleInput}
              required
            ></input>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Age:</label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInput}
              required
            ></input>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Which units would you prefer?</label>
            <input
              type="radio"
              name="heightUnits"
              value="cm"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            cm
            <input
              type="radio"
              name="heightUnits"
              value="ft"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            ft
          </div>
        );
      case 4:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Which units would you prefer?</label>
            <input
              type="radio"
              name="weightUnits"
              value="kg"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            kg
            <input
              type="radio"
              name="weightUnits"
              value="lb"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            lb
          </div>
        );
      case 5:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Height:</label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInput}
              required
            ></input>
            {formData.heightUnits}
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col h-96 pt-10 justify-around items-center">
      <h1 className="text-4xl text-center">
        Let&apos;s answer a few questions to set you up!
      </h1>
      <h2 className="text-2xl text-center">Step {currentStep}</h2>
      {renderStep()}
      <div className="flex gap-6">
        <button
          className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={currentStep === 11}
        >
          Next
        </button>
      </div>
    </div>
  );
}
