const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
  },

  htmlScore: {
    type: Number,
    default: 0,
  },

  cssScore: {
    type: Number,
    default: 0,
  },

  jsScore: {
    type: Number,
    default: 0,
  },

  reactScore: {
    type: Number,
    default: 0,
  },

  totalScore: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model(
  "Result",
  ResultSchema
);