import { useRouter } from "next/router";
// import FileSaver from "file-saver";
import Nav from "../../components/nav/Nav";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";
import { downloadFileApi } from "../../services/api";

const download = ({ filename }) => {
  const router = useRouter();
  const { id } = router.query;

  if (id) downloadFileApi(id);

  // const onClick = (e) => {
  //   e.preventDefault();
  //   FileSaver.saveAs(File, filename);
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
      </div>
      <div className="row justify-content-sm-center">
        <Loader />
        <button id="btn-clipboard" className="btn">
          Download
        </button>
      </div>
      <div className="row justify-content-sm-center">
        <Footer />
      </div>
    </div>
  );
};

export default download;
