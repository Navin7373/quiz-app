const router = require("express").Router();

const Result = require("../models/Result");



// SAVE RESULT

router.post("/save", async (req, res) => {

  try {

    const result = new Result(req.body);

    await result.save();

    res.status(201).json({
      message: "Result Saved Successfully",
    });

  } catch (error) {

    res.status(500).json(error);

  }

});



// GET RESULTS

router.get("/", async (req, res) => {

  try {

    const results = await Result.find();

    res.status(200).json(results);

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;