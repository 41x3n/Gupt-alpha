import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import Qr from "../qr/Qr";

const Clipboard = ({ token }) => {
  const [copyText, setCopyText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setCopyText(`http://localhost:3000/download/${token}`);
  }, [token]);

  const copyToClipboard = () => {
    copy(copyText);
    setClicked(true);
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
              {clicked ? "Copied" : "Copy Link"}
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
            <Qr token={token} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clipboard;
