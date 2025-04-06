import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScanQR from "./pages/ScanQR";
import AttendanceList from "./pages/AttendanceList";
import GenerateQR from "./components/GenerateQR";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";

const App = () => {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            QR Attendance System
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/scan" sx={styles.navButton}>
              Scan QR
            </Button>
            <Button color="inherit" component={Link} to="/attendance" sx={styles.navButton}>
              View Attendance
            </Button>
            <Button color="inherit" component={Link} to="/generate" sx={styles.navButton}>
              Generate QR
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Container sx={styles.container}>
        <Routes>
          <Route path="/scan" element={<ScanQR />} />
          <Route path="/attendance" element={<AttendanceList />} />
          <Route path="/generate" element={<GenerateQR />} />
        </Routes>
      </Container>
    </Router>
  );
};

const styles = {
  navButton: {
    margin: "0 10px",
    fontSize: "16px",
    textTransform: "none",
    color: "#333",
    "&:hover": { color: "#007BFF" },
  },
  container: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default App;