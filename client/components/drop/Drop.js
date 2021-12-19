import { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone"; // Import React DropZone

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFile } from "@fortawesome/free-solid-svg-icons";
import { SodiumPlus } from "sodium-plus";

import Clipboard from "../clipboard/Clipboard";

import { uploadFileApi } from "../../services/api";
import listStyles from "../drop/FileList.module.css";

const Drop = () => {
  //Files
  const [myFiles, setMyFiles] = useState([]);
  // const [isUploaded, setIsUploaded] = useState(false);
  const [share, setShare] = useState(false);
  const [id, setUploadDataId] = useState();

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

  //todo: onSubmit function
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    myFiles.map(async (file, index) => {
      // console.log(file.size);
      // console.log(file.name);
      let buffer = await file.arrayBuffer();
      console.log(buffer);
      let unit8View = new Uint8Array(buffer);
      console.log(unit8View);
      console.log(new File([unit8View], `${file.name}`));

      let sodium = await SodiumPlus.auto();
      // console.log(sodium);

      let aliceKeypair = await sodium.crypto_box_keypair();
      let aliceSecret = await sodium.crypto_box_secretkey(aliceKeypair);
      let alicePublic = await sodium.crypto_box_publickey(aliceKeypair);
      let bobKeypair = await sodium.crypto_box_keypair();
      let bobSecret = await sodium.crypto_box_secretkey(bobKeypair);
      let bobPublic = await sodium.crypto_box_publickey(bobKeypair);

      let plaintext = unit8View;
      let nonce = await sodium.randombytes_buf(24);

      let ciphertext = await sodium.crypto_box(
        plaintext,
        nonce,
        aliceSecret,
        bobPublic
      );
      console.log(ciphertext); //Unit8Array

      // Blob Object
      // let blob = new Blob([ciphertext], { type: "application/pdf" });
      // console.log(blob);
      // File Object
      let filez = new File([ciphertext], `${file.name}`, {
        type: "application/pdf",
      });
      console.log(filez);

      formData.append(`file`, filez);

      let decrypted = await sodium.crypto_box_open(
        ciphertext,
        nonce,
        bobSecret,
        alicePublic
      );
      console.log(decrypted);

      console.log(new File([decrypted], `${file.name}`));

      // let sodium = await SodiumPlus.auto();
      // let key = await sodium.crypto_secretbox_keygen();
      // let nonce = await sodium.randombytes_buf(24);
      // let message = JSON.stringify(unit8View);
      // console.log(message); // After stringify
      // let decoder = new TextDecoder();

      // let cipherText = await sodium.crypto_secretbox(message, nonce, key);
      // let encryptedFile = decoder.decode(cipherText);
      // console.log(encryptedFile);

      // formData.append(`file`, file);
      // let encoder = new TextEncoder();
      // let decrypted = await sodium.crypto_secretbox_open(
      //   cipherText,
      //   nonce,
      //   key
      // );
      // //console.log(decrypted.toString("utf-8"));

      // let decryptedFile = decrypted.toString("utf-8");
      // console.log(decryptedFile);
    });

    let data = await uploadFileApi(formData);

    console.log(data);

    if (data.length > 0) {
      setUploadDataId(data);
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
        <Clipboard id={id} />
      )}
    </div>
  );
};
export default Drop;
