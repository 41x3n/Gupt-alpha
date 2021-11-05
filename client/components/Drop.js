import { useState, useCallback } from 'react';

import { useDropzone } from 'react-dropzone'; // Import React DropZone

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFile } from '@fortawesome/free-solid-svg-icons';

import Clipboard from './Clipboard'; // Import Copy Link component
import Qr from './Qr'; // Import Scan QR Code component

// import styles from '../styles/global.css';
import listStyles from '../styles/FileList.module.css';

const Drop = () => {
  //Files
  const [myFiles, setMyFiles] = useState([]);

  const [share, setShare] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 5242880,
  });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const removeAll = () => {
    setMyFiles([]);
  };

  //todo: Accepted Files
  const files = myFiles.map((file) => (
    <li key={file.path} style={{ color: 'black' }}>
      <FontAwesomeIcon icon={faFile} height={10} width={10} /> &nbsp;
      {file.name}
      <button
        onClick={removeFile(file)}
        style={{ border: 0, background: '#FFF', color: 'red' }}
      >
        X
      </button>
    </li>
  ));

  //todo: onSubmit function
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.map((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const res = await axios.post('', {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      console.log(res);
      if (res.status === 200) {
        setDownloadFile(res.data);
        console.log('File Uploaded');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div
        className="dropcontainer"
        {...getRootProps({ className: 'dropzone' })}
        style={{
          width: '300px',
          height: '200px',
          marginLeft: '20px',
          padding: '65px',
          border: '2px dashed #F9CCCC',
          borderRadius: '10px',
          background: '#FFEDED',
          color: '#000',
          transition: 'border 0.24s ease-in-out',
          textAlign: 'center',
        }}
      >
        <input {...getInputProps()} />
        <p style={{ color: '#FE4167' }}>
          <FontAwesomeIcon
            icon={faUpload}
            style={{ width: '35px', height: '35px' }}
          />
        </p>
      </div>
      <center>
        <div>
          <ul id={listStyles.scb} className={listStyles.list}>
            <li>{files}</li>
          </ul>
        </div>
        {/* {files.length > 0 && (
          <button className="btn" onClick={removeAll}>
            Remove All
          </button>
        )} */}
      </center>
      <from onSubmit={onSubmit}>
        <center>
          <input
            as
            type="submit"
            id="btn-upload"
            className="btn"
            value="UPLOAD"
            onClick={() => setShare(true)}
          />
        </center>
      </from>
      {share ? (
        <>
          <br />
          <Clipboard />
          <br />
          <Qr />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default Drop;
