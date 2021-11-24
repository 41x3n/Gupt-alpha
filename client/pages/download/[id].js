import { useRouter } from "next/router";
// import { useState } from "react";
import Nav from "../../components/Nav";
import Loader from "../../components/DownloadPage/Loader";
// import Error from "../_error";
import Footer from "../../components/Footer";
import { downloadFileApi } from "../../services/api";

const download = ({ statusCode }) => {
  const router = useRouter();
  const { id } = router.query;
  // const link = `http://localhost:3000/${id}`;
  // const [downloadFile, setDownloadFile] = useState("");

  if (id) downloadFileApi(id);

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
      </div>
      <div className="row justify-content-sm-center">
        <Loader />
        Download
      </div>
      <div className="row justify-content-sm-center">
        <Footer />
      </div>
    </div>
  );
};

export default download;
