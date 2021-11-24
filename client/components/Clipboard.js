import { useRouter } from "next/router";
import { useState } from "react";
import copy from "copy-to-clipboard";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Qr from "./Qr";
import { downloadFileApi } from "../services/api";

const Clipboard = ({ id }) => {
  const [copyText, setCopyText] = useState(
    `http://localhost:3000/api/download/${id}`
  );

  const copyToClipboard = () => {
    copy(copyText);
    alert("Link Copied");
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        style={{ padding: "50px" }}
      >
        <input
          type="text"
          value={copyText}
          style={{
            border: "1px solid #FE4167",
            borderRadius: "5px",
            width: "100%",
            height: "37px",
            textAlign: "center",
          }}
          readOnly
        />
        <div className="d-flex flex-row justify-content-center">
          <div
            style={{
              width: "50%",
              height: "50%",
              minHeight: "37px",
              margin: "2%",
            }}
          >
            <button
              id="btn-clipboard"
              className="btn"
              onClick={copyToClipboard}
            >
              Copy Link
            </button>
          </div>
          <div
            style={{
              width: "50%",
              height: "50%",
              minHeight: "37px",
              margin: "2%",
            }}
          >
            <Qr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clipboard;
