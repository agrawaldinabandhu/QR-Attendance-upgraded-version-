import { useEffect, useState } from "react";
import { getAttendance } from "../services/api";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { saveAs } from "file-saver";

const AttendanceList = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const records = await getAttendance();
      setAttendance(records);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Student ID, Timestamp\n" + 
      attendance.map(record => `${record.studentId}, ${new Date(record.timestamp).toLocaleString()}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "attendance.csv");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Attendance Records</h2>
      <Button variant="contained" color="primary" onClick={downloadCSV} style={{ marginBottom: "10px" }}>
        Download CSV
      </Button>
      <TableContainer component={Paper} style={{ maxWidth: "600px", margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Student ID</b></TableCell>
              <TableCell><b>Timestamp</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendance.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.studentId}</TableCell>
                <TableCell>{new Date(record.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AttendanceList;
