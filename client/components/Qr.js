import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import QRCode from 'qrcode.react';
// import QRCode from 'qrcode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

const ScanQr = () => {
  // const [text, setText] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  const [value, setValue] = useState('http://google.com');

  const [modalOpen, setModalOpen] = useState(false);

  const generateQrCode = async () => {
    try {
      const res = await QRCode.toDataURL(text);
      setImageUrl(res);
    } catch (error) {
      console.log(error);
    }
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
              width: '980px',
              height: '800px',
              left: '100px',
              marginTop: '50px',
            },
          }}
        >
          <button
            className="btn btn-danger"
            onClick={() => setModalOpen(false)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '97%',
            }}
          >
            X
          </button>
          <center>
            <QRCode
              value={value}
              style={{ width: '200px', height: '200px', marginTop: '150px' }}
            />
          </center>
          {/* <input onChange={(e) => setText(e.target.value)} />
          <button className="btn btn-primary" onClick={() => generateQrCode()}>
            Generate
          </button>
          <br />
          <br />
          {imageUrl ? (
            <a href={imageUrl} download>
              <img src={imageUrl} alt="img" />
            </a>
          ) : null} */}
        </Modal>
      </center>
    </div>
  );
};

export default ScanQr;
