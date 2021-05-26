const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Select 'cardio' or 'resistance'!",
        },
        name: {
            type: String,
            trim: true,
            required: "Type in an exercise",
        },
        duration: {
            type: Number,
            required: "Enter a duration of time"
        },
        distance: {
            type: Number,
            required: "Enter the distance amount"
        },
        weight: {
            type: Number,
            required: "Enter amount of weight"
        },
        reps: {
            type: Number,
            required: "Enter number of reps"
        },
        sets: {
            type: Number,
            required: "Enter number of sets"
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;