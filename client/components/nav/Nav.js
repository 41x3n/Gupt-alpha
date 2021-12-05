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
        {/* <div className="justify-cofntent-start align-items-center">Gupt</div> */}
        <button
          className="navbar-toggler navbar-toggler-right navbar-light bg-light"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav text-black">
            <li className="nav-item">
              <Link className="nav-link" href="/team">
                Team
              </Link>
            </li>
            &nbsp; &nbsp;
            <li className="nav-item">
              <Link className="nav-link" href="/signup">
                SignUp
              </Link>
            </li>
            &nbsp; &nbsp;
            <li className="nav-item">
              <Link className="nav-link" href="/signin">
                SignIn
              </Link>
            </li>
            &nbsp; &nbsp;
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
