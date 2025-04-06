import { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Card, Button, Typography } from "@mui/material";

const ScanQR = () => {
  const [result, setResult] = useState("");

  const startScanner = () => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: 250,
      fps: 10,
    });

    scanner.render((decodedText) => {
      setResult(decodedText);
      scanner.clear();
    });
  };

  return (
    <div style={styles.container}>
      <Card sx={styles.card}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          Scan QR Code
        </Typography>

        <Button variant="contained" sx={styles.scanBtn} onClick={startScanner}>
          Start Scan
        </Button>

        <div id="reader" style={styles.scanner}></div>

        {result && <Typography variant="h6" sx={{ marginTop: "15px", color: "#28a745" }}>Scanned Data: {result}</Typography>}
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
  scanBtn: {
    marginTop: "15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  scanner: {
    marginTop: "20px",
  },
};

export default ScanQR;
