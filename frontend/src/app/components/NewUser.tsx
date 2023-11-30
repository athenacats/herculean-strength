"use client";
import React, { useEffect, useState } from "react";

export default function NewUser() {
  const [formData, setFormData] = useState({
    sex: "",
    age: "",
    heightUnits: "",
    weightUnits: "",
    weight: "",
    height: "",
    goals: "",
    workoutFrequency: "",
    experience: "",
    currSquatMax: "",
    currBenchMax: "",
    currDeadliftMax: "",
    goalSquatMax: "",
    goalBenchMax: "",
    goalDeadliftMax: "",
    specialization: "",
    notifications: "true",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [currError, setCurrError] = useState("");
  const [filled, setFilled] = useState("");

  const handleInput = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFilled(value);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setCurrError("");
    setFilled("");
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setFilled("");
  };

  useEffect(() => {
    console.log(filled);
    if (filled !== "") {
      setCurrError("");
    } else {
      setCurrError("You must select a value");
    }
  }, [filled]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Sex:</label>
            <input
              type="radio"
              name="sex"
              value="Male"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto text-xl"> Male</p>
            <input
              type="radio"
              name="sex"
              value="Female"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto text-xl"> Female</p>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Age:</label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="number"
              max={99}
              min={18}
              name="age"
              value={formData.age}
              onChange={handleInput}
              onBlur={() =>
                parseInt(formData.age) < 18 || parseInt(formData.age) >= 99
                  ? setCurrError("Age must be between 18 and 99")
                  : setCurrError("")
              }
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
      case 6:
        return (
          <div className="flex gap-4">
            <label className="text-xl">Weight:</label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleInput}
              required
            ></input>
            {formData.weightUnits}
          </div>
        );
      case 7:
        return (
          <div className="flex gap-4 w-5/6 justify-center">
            <label className="text-xl">What are your current goals?</label>
            <input
              type="radio"
              name="goals"
              value="Gain more strength"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>
              <strong className="font-bold">Gain more strength:</strong>{" "}
              I&apos;d like to build my strength and become a mf unit
            </p>
            <input
              type="radio"
              name="goals"
              value="Maintainance"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>
              <strong className="font-bold">Maintainance:</strong> I have no
              upcoming competition and would like to keep fit
            </p>
            <input
              type="radio"
              name="goals"
              value="Bodybulding"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>
              <strong className="font-bold">Bodybuilding:</strong> I&apos;d like
              to sculpt my body and look like a mf unit
            </p>
            <input
              type="radio"
              name="goals"
              value="Prep"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>
              <strong className="font-bold">Competition Prep:</strong> I have a
              comp in the next few weeks that I want to smash
            </p>
          </div>
        );
      case 8:
        return (
          <div className="flex gap-4 w-5/6 justify-center">
            <label className="text-xl">
              What&apos;s your desired workout frequency?
            </label>
            <input
              type="radio"
              name="workoutFrequency"
              value="1 - 2 days a week"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>1 - 2 days a week</p>
            <input
              type="radio"
              name="workoutFrequency"
              value="3 - 4 days a week"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>3 - 4 days a week</p>
            <input
              type="radio"
              name="workoutFrequency"
              value="5 - 6 days a week"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p>5 - 6 days a week</p>
            <input
              type="radio"
              name="workoutFrequency"
              value="Daily"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Daily</p>
          </div>
        );
      case 9:
        return (
          <div className="flex gap-4 w-5/6 justify-center">
            <label className="text-xl">
              How much experience do you have in the gym?
            </label>
            <input
              type="radio"
              name="experience"
              value="Beginner"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Beginner</p>
            <input
              type="radio"
              name="experience"
              value="Intermediate"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Intermediate</p>
            <input
              type="radio"
              name="experience"
              value="Advanced"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Advanced</p>
          </div>
        );
      case 10:
        return (
          <div className="flex gap-4">
            <label className="text-xl">
              What are your current maxes? (estimates are okay):
            </label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="number"
              name="currSquatMax"
              step={0.1}
              value={formData.currSquatMax}
              onChange={handleInput}
              placeholder="Current Squat Max"
              required
            ></input>
            {formData.weightUnits}
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="number"
              step={0.1}
              name="currBenchMax"
              value={formData.currBenchMax}
              onChange={handleInput}
              placeholder="Current Bench Max"
              required
            ></input>
            {formData.weightUnits}
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
              type="number"
              step={0.1}
              name="currDeadliftMax"
              value={formData.currDeadliftMax}
              onChange={handleInput}
              placeholder="Current Deadlift Max"
              required
            ></input>
            {formData.weightUnits}
          </div>
        );
      case 11:
        return (
          <div className="flex gap-4">
            <label className="text-xl">
              What are your goal maxes? (estimates are okay):
            </label>
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 disabled:border-slate-700 disabled:cursor-not-allowed "
              type="number"
              name="goalSquatMax"
              disabled={
                currError !== "" &&
                currError !==
                  "Squat goal must be equal or more than current maxes"
              }
              value={formData.goalSquatMax}
              onChange={handleInput}
              placeholder="Goal Squat Max"
              onBlur={() =>
                formData.goalSquatMax >= formData.currSquatMax
                  ? setCurrError("")
                  : setCurrError(
                      "Squat goal must be equal or more than current maxes"
                    )
              }
              required
            ></input>
            {formData.weightUnits}
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 disabled:border-slate-700 disabled:cursor-not-allowed "
              type="number"
              disabled={
                currError !== "" &&
                currError !==
                  "Bench goal must be equal or more than current maxes"
              }
              name="goalBenchMax"
              value={formData.goalBenchMax}
              onChange={handleInput}
              onBlur={() =>
                formData.goalBenchMax >= formData.currBenchMax
                  ? setCurrError("")
                  : setCurrError(
                      "Bench goal must be equal or more than current maxes"
                    )
              }
              placeholder="Goal Bench Max"
              required
            ></input>
            {formData.weightUnits}
            <input
              className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 disabled:border-slate-700 disabled:cursor-not-allowed "
              type="number"
              disabled={
                currError !== "" &&
                currError !==
                  "Deadlift goal must be equal or more than current maxes"
              }
              name="goalDeadliftMax"
              value={formData.goalDeadliftMax}
              onChange={handleInput}
              onBlur={() => {
                console.log(formData.goalDeadliftMax, formData.currDeadliftMax);
                formData.goalDeadliftMax >= formData.currDeadliftMax
                  ? setCurrError("")
                  : setCurrError(
                      "Deadlift goal must be equal or more than current maxes"
                    );
                console.log(currError);
              }}
              placeholder="Goal Deadlift Max"
              required
            ></input>
            {formData.weightUnits}
          </div>
        );
      case 12:
        return (
          <div className="flex gap-4 w-5/6 justify-center">
            <label className="text-xl">
              Is there any lift you would like to put more emphasis on?
            </label>
            <input
              type="radio"
              name="specialization"
              value="Squat"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Squat</p>
            <input
              type="radio"
              name="specialization"
              value="Bench"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Bench</p>
            <input
              type="radio"
              name="specialization"
              value="Deadlift"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Deadlift</p>
            <input
              type="radio"
              name="specialization"
              value="Balanced"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Balanced</p>
          </div>
        );
      case 13:
        return (
          <div className="flex gap-4 w-5/6 justify-center">
            <label className="text-xl">
              Lastly, please allow notifications so that you can be up to date
              with your workouts
            </label>
            <input
              type="radio"
              name="notifications"
              value="true"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Allow</p>
            <input
              type="radio"
              name="notifications"
              value="false"
              onChange={handleInput}
              className={`text-xl text-center hover:cursor-pointer`}
              required
            />
            <p className="my-auto">Deny</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col h-auto gap-6 pt-10 justify-around items-center">
      <h1 className="text-4xl text-center">
        Let&apos;s answer a few questions to set you up!
      </h1>
      <h2 className="text-2xl text-center">Step {currentStep}</h2>
      {renderStep()}

      <div className="flex gap-6">
        {currentStep !== 12 ? (
          <>
            <button
              className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={currentStep === 1 || currError !== ""}
            >
              Previous
            </button>
            <button
              className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={currError !== "" || filled === ""}
            >
              Next
            </button>{" "}
          </>
        ) : (
          <>
            <button
              className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={submitForm}
            >
              Submit Form
            </button>
            <button
              className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={restartForm}
            >
              Restart Form
            </button>{" "}
          </>
        )}
      </div>
      <div>{currError}</div>
    </div>
  );
}
