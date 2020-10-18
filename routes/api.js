const router = require("express").Router()
const Workouts = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    console.log(res);
    Workouts.create({})
        .then(
            dbWorkOut => {
                res.json(dbWorkOut);
            }
        )
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    console.log(res);
    Workouts.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        {new: true, runValidators: true}
    
        
        )
        .then(
            dbWorkOut => {
                res.json(dbWorkOut);
            }
        )
        .catch(err => {
            res.json(err);
        });
});
