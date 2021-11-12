import Drop from "./Drop";
//import bodyStyles from '../../styles/Body.module.css';
const Body = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        color: "white",
        // marginTop: '100px',
        maxWidth: "800px",
      }}
    >
      <div className="row">
        <div className="col-sm py-2">
          <Drop />
        </div>
        <div className="col-sm py-2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "40px",
              textTransform: "uppercase",
            }}
          >
            Encrypted
            <br /> Anonymous
            <br /> File Sharing
          </div>
          {/* <h2>
            Share Your files over encrypted network without getting tracked
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
