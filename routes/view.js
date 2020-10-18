// dependencies
const router = require("express").Router();
const path = require("path");

// get route for exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// get route for stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"))
});

module.exports = router;
