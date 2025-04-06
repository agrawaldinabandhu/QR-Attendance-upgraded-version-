import QRGenerator from "../components/QRGenerator";
import QRScanner from "../components/QRScanner";
import { useState } from "react";

const Home = () => {
  const [scanResult, setScanResult] = useState("");

  return (
    <div>
      <h1>Automated Attendance System</h1>
      <QRGenerator />
      <QRScanner onScan={setScanResult} />
      {scanResult && <p>Scanned QR Code: {scanResult}</p>}
    </div>
  );
};

export default Home;
