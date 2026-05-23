const router = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../models/User");



// SIGNUP

router.post("/signup", async (req, res) => {

  try {

    const { username, email, password } = req.body;

    // CHECK USER

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    // HASH PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
    });

  } catch (error) {

    res.status(500).json(error);

  }

});



// LOGIN

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK USER

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });

    }

    // CHECK PASSWORD

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {

      return res.status(400).json({
        message: "Invalid password",
      });

    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;