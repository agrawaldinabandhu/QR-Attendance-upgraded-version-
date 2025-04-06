import { useState } from "react";
import QRCode from "qrcode.react";

const QRGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter student ID"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRGenerator;
