import { useState } from "react";
import Modal from "react-modal";
import QRCode from "qrcode.react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faDownload } from "@fortawesome/free-solid-svg-icons";

const ScanQr = ({ token }) => {
  const [value, setValue] = useState(`http://localhost:3000/download/${token}`);
  const [modalOpen, setModalOpen] = useState(false);

  const downloadQR = () => {
    const canvas = document.getElementById("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <button id="btn-scan" className="btn" onClick={() => setModalOpen(true)}>
        <FontAwesomeIcon icon={faQrcode} width={10} height={10} /> QR Code
      </button>
      <Modal
        isOpen={modalOpen}
        style={{
          overlay: {
            width: "60%",
            height: "75%",
            left: "15%",
            marginTop: "5%",
          },
        }}
      >
        <button
          id="btn-close"
          className="btn"
          onClick={() => setModalOpen(false)}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "95%",
          }}
        >
          X
        </button>
        <center>
          <>
            <QRCode
              id="canvas"
              value={value}
              style={{ width: "200px", height: "200px", marginTop: "50px" }}
            />
            <br />
            <br />
            <button id="download-qr" className="btn" onClick={downloadQR}>
              Download
            </button>{" "}
          </>
        </center>
      </Modal>
    </div>
  );
};

export default ScanQr;
