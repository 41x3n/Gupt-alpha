import { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone"; // Import React DropZone

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faFile } from "@fortawesome/free-solid-svg-icons";

import Clipboard from "../Components/Clipboard";

import listStyles from "../styles/FileList.module.css";

const Drop = () => {
  //Files
  const [myFiles, setMyFiles] = useState([]);
  // const [isUploaded, setIsUploaded] = useState(false);
  const [share, setShare] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 5,
    maxSize: 5242880,
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
    files.map((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const res = await axios.post("", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      console.log(res);
      if (res.status === 200) {
        setDownloadFile(res.data);
        console.log("File Uploaded");
      }
    } catch (err) {
      console.log(err);
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
              onClick={() => setShare(true)}
            >
              UPLOAD
            </button>
          </div>
        </>
      ) : (
        <Clipboard />
      )}
    </div>
  );
};
export default Drop;
