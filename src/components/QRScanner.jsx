import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const QRScanner = ({ onScan }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render((result) => {
      onScan(result);
      scanner.clear();
    });

    return () => scanner.clear();
  }, [onScan]);

  return <div id="reader"></div>;
};

export default QRScanner;
