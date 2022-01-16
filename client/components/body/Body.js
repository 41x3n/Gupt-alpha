import Drop from "../drop/Drop";
import FAQ from "../faq/faq";
const Body = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          color: "white",
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
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ maxWidth: "800px" }}>
        <FAQ />
      </div>
    </>
  );
};

export default Body;
