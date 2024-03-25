import {
  abdominals,
  squatAccessories,
  squatVariation,
} from "./types/Variations";
import { preworkoutData } from "./types/preWorkoutTypes";

export const determineWorkout = (data: preworkoutData) => {
  console.log("workout logic", data);

  type Exercise = {
    name: string;
    sets: Array<{
      reps: number;
      weight: number;
    }>;
  };
  type Workout = {
    exercises: Array<Exercise>;
  };

  if (data.workoutProfile?.goals === "Bodybuilding") {
    const accessory1 =
      squatAccessories[Math.floor(Math.random() * squatAccessories.length)];
    const remainingAccessories = squatAccessories.filter(
      (accessory) => accessory.name !== accessory1.name
    );
    const accessory2 =
      squatAccessories[Math.floor(Math.random() * remainingAccessories.length)];
    const abAccessory =
      abdominals[Math.floor(Math.random() * abdominals.length)];
    if (data.value >= 0 && data.value < 2) {
      const workout: Workout = {
        exercises: [
          {
            name: squatVariation[0].name,
            sets: [
              { reps: 5, weight: data.workoutProfile.currSquatMax * 0.3 },
              { reps: 3, weight: data.workoutProfile.currSquatMax * 0.35 },
              { reps: 1, weight: data.workoutProfile.currSquatMax * 0.4 },
              { reps: 1, weight: data.workoutProfile.currSquatMax * 0.45 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.55 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.55 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.55 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 8,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 8,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 8,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 8,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 8,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 8,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
            ],
          },
          {
            name: abAccessory.name,
            sets: [
              {
                reps: 8,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
            ],
          },
        ],
      };

      return workout;
    } else if (data.value >= 2 && data.value < 4) {
      const workout: Workout = {
        exercises: [
          {
            name: squatVariation[0].name,
            sets: [
              { reps: 5, weight: data.workoutProfile.currSquatMax * 0.35 },
              { reps: 3, weight: data.workoutProfile.currSquatMax * 0.4 },
              { reps: 1, weight: data.workoutProfile.currSquatMax * 0.45 },
              { reps: 1, weight: data.workoutProfile.currSquatMax * 0.55 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.65 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.65 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.65 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 12,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 12,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 12,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 12,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 12,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 12,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
            ],
          },
          {
            name: abAccessory.name,
            sets: [
              {
                reps: 12,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
              {
                reps: 12,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
              {
                reps: 12,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
            ],
          },
        ],
      };

      return workout;
    } else {
      const workout: Workout = {
        exercises: [
          {
            name: squatVariation[0].name,
            sets: [
              { reps: 5, weight: data.workoutProfile.currSquatMax * 0.35 },
              { reps: 3, weight: data.workoutProfile.currSquatMax * 0.4 },
              { reps: 1, weight: data.workoutProfile.currSquatMax * 0.5 },
              { reps: 1, weight: data.workoutProfile.currSquatMax * 0.65 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.75 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.75 },
              { reps: 10, weight: data.workoutProfile.currSquatMax * 0.75 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 15,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 15,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 15,
                weight: accessory1.weight * data.workoutProfile.currSquatMax,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 15,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 15,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
              {
                reps: 15,
                weight: accessory2.weight * data.workoutProfile.currSquatMax,
              },
            ],
          },
          {
            name: abAccessory.name,
            sets: [
              {
                reps: 15,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
              {
                reps: 15,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
              {
                reps: 15,
                weight: abAccessory.weight * data.workoutProfile.currBenchMax,
              },
            ],
          },
        ],
      };

      return workout;
    }
  }
};
