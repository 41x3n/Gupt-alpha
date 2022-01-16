import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FileSaver from "file-saver";
import Nav from "../../components/nav/Nav";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";
import { downloadFileApi } from "../../services/api";
import _sodium from "libsodium-wrappers";

const download = ({ response, filename }) => {
  const router = useRouter();
  const { id } = router.query;
  const [decrypted, setDecrypted] = useState();
  const [fileName, setFilename] = useState("");

  const handleFileDownload = () => {
    let name = fileName.trim();
    let file = new File([decrypted], name);
    FileSaver.saveAs(file, name);
  };

  useEffect(async () => {
    if (id) {
      await _sodium.ready;
      let sodium = _sodium;

      let [key, secretkey, publicKey] = id.split(".");

      let res = await downloadFileApi(key);
      let filename = res.filename;
      let data = res.response.data;

      let cipherText = sodium.from_base64(data);

      let SBUFFER = sodium.from_hex(secretkey);

      let PBUFFER = sodium.from_hex(publicKey);

      decrypted = sodium.crypto_box_seal_open(cipherText, PBUFFER, SBUFFER);
      setDecrypted(decrypted);
      setFilename(filename);
    }
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
      </div>
      <div className="row justify-content-sm-center">
        {decrypted ? (
          <button
            id="btn-clipboard"
            className="btn"
            onClick={handleFileDownload}
          >
            Download
          </button>
        ) : (
          <Loader />
        )}
      </div>
      <div className="row justify-content-sm-center h-50">
        <Footer />
      </div>
    </div>
  );
};

export default download;
