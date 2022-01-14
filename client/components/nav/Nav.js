import Image from "next/image";
import Link from "next/Link";

const Nav = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg row mx-auto"
        style={{ background: "#fff" }}
      >
        <a className="navbar-brand d-flex justify-content-around px-2" href="#">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            // className="d-flex"
            width={50}
            height={50}
          />
          <div className="h1 text m-2" style={{ color: "black" }}>
            GUPT
          </div>
        </a>
      </nav>
    </div>
  );
};
export default Nav;
