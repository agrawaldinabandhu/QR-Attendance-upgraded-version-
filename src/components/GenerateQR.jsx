import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Card, TextField, Button, Typography } from "@mui/material";

const GenerateQR = () => {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const qrRef = useRef();

  const qrValue = studentId && studentName ? `${studentId} - ${studentName}` : "";

  // Function to Download QR Code
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `${studentId}_${studentName}_QR.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div style={styles.container}>
      <Card sx={styles.card}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          Generate QR Code
        </Typography>

        <TextField
          label="Student ID"
          variant="outlined"
          fullWidth
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          sx={styles.input}
        />

        <TextField
          label="Student Name"
          variant="outlined"
          fullWidth
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          sx={styles.input}
        />

        {qrValue && (
          <div ref={qrRef} style={styles.qrContainer}>
            <QRCodeCanvas value={qrValue} size={200} />
            <Button variant="contained" sx={styles.downloadBtn} onClick={downloadQRCode}>
              Download QR Code
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f8f9fa",
  },
  card: {
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "350px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    marginTop: "15px",
  },
  qrContainer: {
    marginTop: "20px",
  },
  downloadBtn: {
    marginTop: "15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
};

export default GenerateQR;
