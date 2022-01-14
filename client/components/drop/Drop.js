import { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone"; // Import React DropZone

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFile } from "@fortawesome/free-solid-svg-icons";
import _sodium from "libsodium-wrappers";
import Clipboard from "../clipboard/Clipboard";

import { uploadFileApi } from "../../services/api";
import listStyles from "../drop/FileList.module.css";

const Drop = () => {
  //Files
  const [myFiles, setMyFiles] = useState([]);
  // const [isUploaded, setIsUploaded] = useState(false);
  const [share, setShare] = useState(false);
  const [token, setToken] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 52428800,
  });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  // const removeAll = () => {
  //   setMyFiles([]);
  // };

  //todo: Accepted Files
  const files = myFiles.map((file) => (
    <li key={file.path} style={{ color: "black" }}>
      <FontAwesomeIcon icon={faFile} height={10} width={10} /> &nbsp;
      {file.name}
      <button
        onClick={removeFile(file)}
        style={{ border: 0, background: "#FFF", color: "red" }}
      >
        X
      </button>
    </li>
  ));
  const generateKeys = (sodium) => {
    let key = sodium.crypto_box_keypair();
    let secretKey = key.privateKey;
    let publicKey = key.publicKey;

    // let nonce = await sodium.randombytes_buf(24);

    return { key, secretKey, publicKey };
  };

  //todo: onSubmit function
  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    await _sodium.ready;
    let sodium = _sodium;

    let { key, secretKey, publicKey } = generateKeys(sodium);

    let PKBUFFER = sodium.to_hex(publicKey);
    // console.log({ PKBUFFER });

    let SKBUFFER = sodium.to_hex(secretKey);
    // console.log({ SKBUFFER });

    await Promise.all(
      myFiles.map(async (file, index) => {
        let buffer = await file.arrayBuffer();
        let unit8View = new Uint8Array(buffer);
        let plaintext = unit8View;

        let ciphertext = sodium.crypto_box_seal(plaintext, publicKey);
        console.log(ciphertext);

        let fileName = file.name;

        let CTB64 = sodium.to_base64(ciphertext);
        console.log(CTB64);
        let blob = new Blob([CTB64]);
        console.log(blob);

        let myReader = new FileReader();
        myReader.onload = function (event) {
          console.log(JSON.stringify(myReader.result));
        };
        myReader.readAsText(blob);
        formData.append("file", blob, fileName);
        // console.log(formData);
      })
    );

    // console.log(formData);

    let data = await uploadFileApi(formData, {
      "Content-Type": "multipart/form-data",
    });

    console.log(data);

    if (data.length > 0) {
      let token = `${data}.${SKBUFFER}.${PKBUFFER}`;
      console.log(token);
      setToken(token);
      setShare(true);
    }
  };

  return (
    <div className="d-flex flex-column" style={{ height: "100%" }}>
      {myFiles.length == 0 ? (
        <div
          className="dropcontainer"
          {...getRootProps({ className: "dropzone" })}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "65px",
            border: "2px dashed #F9CCCC",
            borderRadius: "10px",
            background: "#FFEDED",
            color: "#000",
            transition: "border 0.24s ease-in-out",
            // textAlign: "center",
          }}
        >
          <input {...getInputProps()} />
          <FontAwesomeIcon
            icon={faUpload}
            style={{ width: "35px", height: "35px", color: "#FE4167" }}
          />
        </div>
      ) : share === false ? (
        <>
          <ul
            style={{
              width: "100%",
              maxHeight: "80%",
              minWidth: "340px",
              minHeight: "169px",
              overflowX: "hidden",
              overflowY: "scroll",
            }}
            id={listStyles.scb}
            className={listStyles.list}
          >
            {files}
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "15px",
            }}
          >
            <button
              type="submit"
              id="btn-upload"
              className="btn"
              onClick={onSubmit}
            >
              UPLOAD
            </button>
          </div>
        </>
      ) : (
        <Clipboard token={token} />
      )}
    </div>
  );
};
export default Drop;
