// require mongoose 
const mongoose = require("mongoose");
// schema
const taskerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 200 },
  author: String,
  uid: String,
  isComplete: Boolean,
  date: { type: Date, default: new Date() },
});

// model

const TaskerModel = mongoose.model("TaskerModel", taskerSchema);

exports.TaskerModel = TaskerModel;

