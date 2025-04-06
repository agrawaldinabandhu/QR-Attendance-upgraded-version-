import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/generate-qr")}>Generate QR Code</button>
      <button onClick={() => navigate("/scan-qr")}>Scan QR Code</button>
    </div>
  );
};

export default Dashboard;
