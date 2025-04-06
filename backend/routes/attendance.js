const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// POST: Save scanned student data
router.post("/", async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!id || !name) {
      return res.status(400).json({ message: "Missing student ID or name" });
    }

    const now = new Date();
    const date = now.toISOString().split("T")[0]; // YYYY-MM-DD format
    const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    const newAttendance = new Attendance({
      id,
      name,
      date,
      time,
    });

    await newAttendance.save();
    res.status(201).json({ message: "Attendance recorded successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error saving attendance", error });
  }
});

// GET: Fetch attendance records
router.get("/", async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().sort({ date: -1, time: -1 });
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance records", error });
  }
});

module.exports = router;
