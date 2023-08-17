import Realm from "realm";

export const WeightExercise = {
  name : "WeightExerciseLog",
  primaryKey:'id',
  properties:{
    date:
    {"date": "2023-08-16", "reps": [10, 5, 5], "selectedWeightWorkout": "Squats", "sets": 3, "weight": [10, 55, 55]}
  }

}