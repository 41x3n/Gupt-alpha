import { useState, useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import dropStyles from "../../styles/Drop.module.css";
import listStyles from "../../styles/FileList.module.css";

const Drop = () => {
  const [files, setFiles] = useState([]);
  const [downloadFile, setDownloadFile] = useState([]);

  console.log(files);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    //console.log(acceptedFiles);
  }, []);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({ onDrop, maxSize: 5242880 });

  //todo: Accepted Files
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      <FontAwesomeIcon icon={faFile} height={10} width={10} /> &nbsp;
      {file.name}
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("File will be deleted");
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} height={10} width={10} />
      </button>
    </li>
  ));

  //todo: Rejected Files
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        {/* <ul>{errors.map(e=> <li key={e.code}>{e.message}</li>)}</ul> */}
      </li>
    );
  });

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

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

  const downloadFiles = () => {};

  return (
    <div className="glass">
      <h3>Upload Files</h3>
      <div className="container">
        <div
          className={dropStyles.dropContainer}
          {...getRootProps({ className: "dropzone" })}
        >
          <input {...getInputProps()} />
          <p>Drag n Drop</p>
        </div>
        <aside>
          <h4>Uploaded Files</h4>
          <div>
            <ul className={listStyles.list}>
              <li>{acceptedFileItems}</li>
              <li>{fileRejectionItems}</li>
            </ul>
          </div>
        </aside>
        <from onSubmit={onSubmit}>
          <input type="submit" value="Upload" />
        </from>
        &nbsp; &nbsp;
        <button onClick={downloadFiles}>Download</button>
      </div>
    </div>
  );
};

export default Drop;
