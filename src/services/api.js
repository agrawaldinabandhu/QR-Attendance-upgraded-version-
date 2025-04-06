import axios from "axios";

const API_URL = "http://localhost:5000/api/attendance";

// Save attendance (QR scan result)
export const saveAttendance = async (studentId) => {
  try {
    const response = await axios.post(API_URL, { studentId });
    return response.data;
  } catch (error) {
    console.error("Error saving attendance:", error);
    throw error;
  }
};

// Get all attendance records
export const getAttendance = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching attendance:", error);
    throw error;
  }
};
