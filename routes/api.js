// dependencies
const router = require("express").Router()
const Workouts = require("../models/workout.js");

// post route
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

// put route
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


// get routes
router.get("/api/workouts", (req, res) => {
    console.log(res);
    Workouts.find()
    .then(
        dbWorkOut => {
            res.json(dbWorkOut)
        }
    )
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    console.log(res);
    Workouts.find({})
    .limit(7)
    .then(
        dbWorkOut => {
            res.json(dbWorkOut);
        }
    )
    .catch(err => {
        res.json(err);
    });

});

// delete workout
router.delete("/api/workouts", ({ body }, res) => {
    console.log(res);
    Workouts.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true)
    })
    .catch(err => {
        res.json(err);
    });

});

module.exports = router;
