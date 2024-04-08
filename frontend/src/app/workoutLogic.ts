import {
  abdominals,
  benchAccessories,
  benchVariation,
  deadliftAccessories,
  deadliftVariation,
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
  let accessories: any[] = [];
  let variation: { name: any }[] = [];
  let bAccessories: any[] = [];
  let bVariation: any[] = [];
  let max: number = 0;

  if (data.workoutProfile?.goals === "Bodybuilding") {
    switch (data.workoutTypeToday?.toLowerCase()) {
      case "squat":
        accessories = squatAccessories;
        variation = squatVariation;
        max = data.workoutProfile!.currSquatMax;
        break;
      case "bench":
        accessories = benchAccessories;
        variation = benchVariation;
        max = data.workoutProfile!.currBenchMax;
        break;
      case "deadlift":
        accessories = deadliftAccessories;
        variation = deadliftVariation;
        max = data.workoutProfile!.currDeadliftMax;
        break;
      default:
        break;
    }
    const accessory1 =
      accessories[Math.floor(Math.random() * accessories.length)];
    const remainingAccessories = accessories.filter(
      (accessory) => accessory.name !== accessory1.name
    );
    const accessory2 =
      accessories[Math.floor(Math.random() * remainingAccessories.length)];
    const abAccessory =
      abdominals[Math.floor(Math.random() * abdominals.length)];
    if (data.value >= 0 && data.value < 2) {
      const workout: Workout = {
        exercises: [
          {
            name: variation[0].name,
            sets: [
              { reps: 5, weight: max * 0.3 },
              { reps: 3, weight: max * 0.35 },
              { reps: 1, weight: max * 0.4 },
              { reps: 1, weight: max * 0.45 },
              { reps: 10, weight: max * 0.55 },
              { reps: 10, weight: max * 0.55 },
              { reps: 10, weight: max * 0.55 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 8,
                weight: accessory1.weight * max,
              },
              {
                reps: 8,
                weight: accessory1.weight * max,
              },
              {
                reps: 8,
                weight: accessory1.weight * max,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 8,
                weight: accessory2.weight * max,
              },
              {
                reps: 8,
                weight: accessory2.weight * max,
              },
              {
                reps: 8,
                weight: accessory2.weight * max,
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
            name: variation[0].name,
            sets: [
              { reps: 5, weight: max * 0.35 },
              { reps: 3, weight: max * 0.4 },
              { reps: 1, weight: max * 0.45 },
              { reps: 1, weight: max * 0.55 },
              { reps: 10, weight: max * 0.65 },
              { reps: 10, weight: max * 0.65 },
              { reps: 10, weight: max * 0.65 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 12,
                weight: accessory1.weight * max,
              },
              {
                reps: 12,
                weight: accessory1.weight * max,
              },
              {
                reps: 12,
                weight: accessory1.weight * max,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 12,
                weight: accessory2.weight * max,
              },
              {
                reps: 12,
                weight: accessory2.weight * max,
              },
              {
                reps: 12,
                weight: accessory2.weight * max,
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
            name: variation[0].name,
            sets: [
              { reps: 5, weight: max * 0.35 },
              { reps: 3, weight: max * 0.4 },
              { reps: 1, weight: max * 0.5 },
              { reps: 1, weight: max * 0.65 },
              { reps: 10, weight: max * 0.75 },
              { reps: 10, weight: max * 0.75 },
              { reps: 10, weight: max * 0.75 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 15,
                weight: accessory1.weight * max,
              },
              {
                reps: 15,
                weight: accessory1.weight * max,
              },
              {
                reps: 15,
                weight: accessory1.weight * max,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 15,
                weight: accessory2.weight * max,
              },
              {
                reps: 15,
                weight: accessory2.weight * max,
              },
              {
                reps: 15,
                weight: accessory2.weight * max,
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
  } else if (data.workoutProfile?.goals === "Maintainance") {
    switch (data.workoutProfile?.specialization.toLowerCase()) {
      case "squat":
        accessories = squatAccessories;
        bAccessories = benchAccessories;
        variation = squatVariation;
        bVariation = benchVariation;
        break;
      case "deadlift":
        accessories = deadliftAccessories;
        bAccessories = benchAccessories;
        variation = deadliftVariation;
        bVariation = benchVariation;
        break;
      default:
        break;
    }
    const variation1 = variation[Math.floor(Math.random() * variation.length)];
    const variation2 =
      bVariation[Math.floor(Math.random() * bVariation.length)];
    const accessory1 =
      accessories[Math.floor(Math.random() * accessories.length)];
    const remainingAccessories = accessories.filter(
      (accessory) => accessory.name !== accessory1.name
    );
    const accessory2 =
      accessories[Math.floor(Math.random() * remainingAccessories.length)];
    const bAccessory1 =
      bAccessories[Math.floor(Math.random() * bAccessories.length)];
    const remainingBAccessories = bAccessories.filter(
      (accessory) => accessory.name !== bAccessory1.name
    );
    const bAccessory2 =
      bAccessories[Math.floor(Math.random() * remainingBAccessories.length)];
    const abAccessory =
      abdominals[Math.floor(Math.random() * abdominals.length)];
    if (data.value >= 0 && data.value < 2) {
      const workout: Workout = {
        exercises: [
          {
            name: variation1,
            sets: [
              { reps: 5, weight: max * 0.3 },
              { reps: 3, weight: max * 0.35 },
              { reps: 1, weight: max * 0.4 },
              { reps: 1, weight: max * 0.45 },
              { reps: 10, weight: max * 0.55 },
              { reps: 10, weight: max * 0.55 },
              { reps: 10, weight: max * 0.55 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 8,
                weight: accessory1.weight * max,
              },
              {
                reps: 8,
                weight: accessory1.weight * max,
              },
              {
                reps: 8,
                weight: accessory1.weight * max,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 8,
                weight: accessory2.weight * max,
              },
              {
                reps: 8,
                weight: accessory2.weight * max,
              },
              {
                reps: 8,
                weight: accessory2.weight * max,
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
            name: variation[0].name,
            sets: [
              { reps: 5, weight: max * 0.35 },
              { reps: 3, weight: max * 0.4 },
              { reps: 1, weight: max * 0.45 },
              { reps: 1, weight: max * 0.55 },
              { reps: 10, weight: max * 0.65 },
              { reps: 10, weight: max * 0.65 },
              { reps: 10, weight: max * 0.65 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 12,
                weight: accessory1.weight * max,
              },
              {
                reps: 12,
                weight: accessory1.weight * max,
              },
              {
                reps: 12,
                weight: accessory1.weight * max,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 12,
                weight: accessory2.weight * max,
              },
              {
                reps: 12,
                weight: accessory2.weight * max,
              },
              {
                reps: 12,
                weight: accessory2.weight * max,
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
            name: variation[0].name,
            sets: [
              { reps: 5, weight: max * 0.35 },
              { reps: 3, weight: max * 0.4 },
              { reps: 1, weight: max * 0.5 },
              { reps: 1, weight: max * 0.65 },
              { reps: 10, weight: max * 0.75 },
              { reps: 10, weight: max * 0.75 },
              { reps: 10, weight: max * 0.75 },
            ],
          },
          {
            name: accessory1.name,
            sets: [
              {
                reps: 15,
                weight: accessory1.weight * max,
              },
              {
                reps: 15,
                weight: accessory1.weight * max,
              },
              {
                reps: 15,
                weight: accessory1.weight * max,
              },
            ],
          },
          {
            name: accessory2.name,
            sets: [
              {
                reps: 15,
                weight: accessory2.weight * max,
              },
              {
                reps: 15,
                weight: accessory2.weight * max,
              },
              {
                reps: 15,
                weight: accessory2.weight * max,
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
