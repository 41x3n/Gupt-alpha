import { useState } from "react";
import Modal from "react-modal";
import QRCode from "qrcode.react";
// import QRCode from 'qrcode';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faDownload } from "@fortawesome/free-solid-svg-icons";

const ScanQr = () => {
  const [value, setValue] = useState("http://google.com");
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
      <center>
        <button
          id="btn-scan"
          className="btn"
          onClick={() => setModalOpen(true)}
        >
          <FontAwesomeIcon icon={faQrcode} width={10} height={10} /> QR Code
        </button>
        <Modal
          isOpen={modalOpen}
          style={{
            overlay: {
              width: "60%",
              height: "75%",
              left: "10%",
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
                style={{ width: "200px", height: "200px", marginTop: "150px" }}
              />
              <br />
              <br />
              <button id="download-qr" className="btn" onClick={downloadQR}>
                <FontAwesomeIcon
                  id="downloadqr-logo"
                  icon={faDownload}
                  style={{ width: "25px", height: "25px" }}
                />
              </button>{" "}
            </>
          </center>
        </Modal>
      </center>
    </div>
  );
};

export default ScanQr;
