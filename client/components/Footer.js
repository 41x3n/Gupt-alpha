import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer>
      <span>
        <FontAwesomeIcon icon={faCopyright} width={30} height={30} /> Copyright
        2021
      </span>
    </footer>
  );
};

export default Footer;
