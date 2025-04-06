const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
