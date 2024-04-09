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
  let variation: any[] = [];
  let bAccessories: any[] = [];
  let bVariation: any[] = [];
  let bMax: number = 0;
  let max: number = 0;

  if (data.workoutProfile?.goals === "Bodybuilding") {
    switch (data.workoutTypeToday!.toLowerCase()) {
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
  } else {
    switch (data.workoutTypeToday!.toLowerCase()) {
      case "squat":
        accessories = squatAccessories;
        bAccessories = benchAccessories;
        variation = squatVariation;
        bVariation = benchVariation;
        max = data.workoutProfile!.currSquatMax;
        bMax = data.workoutProfile!.currBenchMax;
        break;
      case "deadlift":
        accessories = deadliftAccessories;
        bAccessories = benchAccessories;
        variation = deadliftVariation;
        bVariation = benchVariation;
        max = data.workoutProfile!.currDeadliftMax;
        bMax = data.workoutProfile!.currBenchMax;
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
    let variation1Difficulty: number;
    let variation2Difficulty: number;

    if (data.workoutProfile?.goals === "Maintainance") {
      if (data.value >= 0 && data.value < 2) {
        variation1Difficulty = variation1.easy;
        variation2Difficulty = variation2.easy;
      } else if (data.value >= 2 && data.value < 4) {
        variation1Difficulty = variation1.medium - 0.1;
        variation2Difficulty = variation2.medium - 0.1;
      } else {
        variation1Difficulty = variation1.hard - 0.1;
        variation2Difficulty = variation2.hard - 0.1;
      }
      const workout: Workout = {
        exercises: [
          {
            name: variation1,
            sets: [
              { reps: 6, weight: max * variation1Difficulty * 0.5 },
              { reps: 6, weight: max * variation1Difficulty * 0.7 },
              { reps: 6, weight: max * variation1Difficulty * 0.9 },
              { reps: 6, weight: max * variation1Difficulty },
              { reps: 6, weight: max * variation1Difficulty },
              { reps: 6, weight: max * variation1Difficulty },
            ],
          },
          {
            name: variation2,
            sets: [
              { reps: 6, weight: bMax * variation2Difficulty * 0.5 },
              { reps: 6, weight: bMax * variation2Difficulty * 0.7 },
              { reps: 6, weight: bMax * variation2Difficulty * 0.9 },
              { reps: 6, weight: bMax * variation2Difficulty },
              { reps: 6, weight: bMax * variation2Difficulty },
              { reps: 6, weight: bMax * variation2Difficulty },
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
            name: bAccessory1.name,
            sets: [
              {
                reps: 8,
                weight: bAccessory1.weight * bMax,
              },
              {
                reps: 8,
                weight: bAccessory1.weight * bMax,
              },
              {
                reps: 8,
                weight: bAccessory1.weight * bMax,
              },
            ],
          },
          {
            name: bAccessory2.name,
            sets: [
              {
                reps: 8,
                weight: bAccessory2.weight * bMax,
              },
              {
                reps: 8,
                weight: bAccessory2.weight * bMax,
              },
              {
                reps: 8,
                weight: bAccessory2.weight * bMax,
              },
            ],
          },
          {
            name: abAccessory.name,
            sets: [
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
            ],
          },
        ],
      };
      return workout;
    } else if (data.workoutProfile?.goals === "Gain more strength") {
      if (data.value >= 0 && data.value < 2) {
        variation1Difficulty = variation1.medium;
        variation2Difficulty = variation2.medium;
      } else if (data.value >= 2 && data.value < 4) {
        variation1Difficulty = variation1.hard;
        variation2Difficulty = variation2.hard;
      } else {
        variation1Difficulty = variation1.hard + 0.1;
        variation2Difficulty = variation2.hard + 0.1;
      }
      const workout: Workout = {
        exercises: [
          {
            name: variation1,
            sets: [
              { reps: 5, weight: max * variation1Difficulty * 0.4 },
              { reps: 4, weight: max * variation1Difficulty * 0.55 },
              { reps: 3, weight: max * variation1Difficulty * 0.7 },
              { reps: 3, weight: max * variation1Difficulty * 0.9 },
              { reps: 3, weight: max * variation1Difficulty },
              { reps: 3, weight: max * variation1Difficulty },
              { reps: 3, weight: max * variation1Difficulty },
              { reps: 3, weight: max * variation1Difficulty },
              { reps: 3, weight: max * variation1Difficulty },
            ],
          },
          {
            name: variation2,
            sets: [
              { reps: 5, weight: bMax * variation2Difficulty * 0.4 },
              { reps: 4, weight: bMax * variation2Difficulty * 0.55 },
              { reps: 3, weight: bMax * variation2Difficulty * 0.7 },
              { reps: 3, weight: bMax * variation2Difficulty * 0.9 },
              { reps: 3, weight: bMax * variation2Difficulty },
              { reps: 3, weight: bMax * variation2Difficulty },
              { reps: 3, weight: bMax * variation2Difficulty },
              { reps: 3, weight: bMax * variation2Difficulty },
              { reps: 3, weight: bMax * variation2Difficulty },
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
            name: bAccessory1.name,
            sets: [
              {
                reps: 8,
                weight: bAccessory1.weight * bMax,
              },
              {
                reps: 8,
                weight: bAccessory1.weight * bMax,
              },
              {
                reps: 8,
                weight: bAccessory1.weight * bMax,
              },
            ],
          },
          {
            name: abAccessory.name,
            sets: [
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
            ],
          },
        ],
      };
      return workout;
    } else {
      const compVariation1 = variation[0];
      const compVariation2 = bVariation[0];
      if (data.value >= 0 && data.value < 2) {
        variation1Difficulty = compVariation1.easy - 0.1;
        variation2Difficulty = compVariation2.easy - 0.1;
      } else if (data.value >= 2 && data.value < 4) {
        variation1Difficulty = compVariation1.easy;
        variation2Difficulty = compVariation2.easy;
      } else {
        variation1Difficulty = compVariation1.medium;
        variation2Difficulty = compVariation2.medium;
      }
      const workout: Workout = {
        exercises: [
          {
            name: compVariation1,
            sets: [
              { reps: 5, weight: max * variation1Difficulty * 0.4 },
              { reps: 4, weight: max * variation1Difficulty * 0.55 },
              { reps: 3, weight: max * variation1Difficulty * 0.7 },
              { reps: 2, weight: max * variation1Difficulty * 0.9 },
              { reps: 1, weight: max * variation1Difficulty },
              { reps: 1, weight: max * variation1Difficulty },
            ],
          },
          {
            name: compVariation2,
            sets: [
              { reps: 5, weight: bMax * variation2Difficulty * 0.4 },
              { reps: 4, weight: bMax * variation2Difficulty * 0.55 },
              { reps: 3, weight: bMax * variation2Difficulty * 0.7 },
              { reps: 2, weight: bMax * variation2Difficulty * 0.9 },
              { reps: 1, weight: bMax * variation2Difficulty },
              { reps: 1, weight: bMax * variation2Difficulty },
            ],
          },
          {
            name: abAccessory.name,
            sets: [
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
              {
                reps: 8,
                weight: abAccessory.weight * bMax,
              },
            ],
          },
        ],
      };
      return workout;
    }
  }
};
