const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter an excerise type."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter valid excercise name."
                },
                duration: {
                    type: Number,
                    required: "Please add time variable in seconds."
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]

    },
    {
        toJSON: {
            virtuals: true,
        }
    }

); 

// reduces the array of exercises to the sum of their durations
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});  

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 
