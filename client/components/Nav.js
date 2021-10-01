import Image from "next/image";
import Link from "next/Link";

import logoMark from "../public/logo_mark.svg";
import navStyles from "../styles/Nav.module.css";

const Nav = ({}) => {
  return (
    <>
      <header>
        <div className={navStyles.container}>
          <nav className={navStyles.navContainer}>
            <div className={navStyles.logoContainer}>
              <Link href="/">
                <Image src={logoMark} width={100} height={100} />
              </Link>
            </div>
            <div className={navStyles.logoTypeContainer}>
              <h1>GUPT</h1>
            </div>
            <div className={navStyles.optionsContainer}>
              <div className={navStyles.optionLink}>
                {" "}
                <Link href="/team">Team</Link>{" "}
              </div>
              <div className={navStyles.optionLink}>
                {" "}
                <Link href="/signin" className={navStyles.optionLink}>
                  Sign In
                </Link>{" "}
              </div>
              <div className={navStyles.optionLink}>
                {" "}
                <Link href="/signup" className={navStyles.optionLink}>
                  Sign Up
                </Link>{" "}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
