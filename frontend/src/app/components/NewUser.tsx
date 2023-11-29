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
  return (
    <div className="flex flex-col h-96 pt-10 justify-around items-center">
      <h1 className="text-4xl text-center">
        Let&apos;s answer a few questions to set you up!
      </h1>
    </div>
  );
}
