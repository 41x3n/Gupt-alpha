import Image from "next/image";

import Abhi from "../public/Abhi.jpg";
import Ani from "../public/Ani.jpg";
import Adi from "../public/Adi.jpg";
import Saumya from "../public/Saumya.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import cardStyles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={cardStyles.container}>
      <div className={cardStyles.card}>
        <div className={cardStyles.imgBx}>
          <Image src={Abhi} alt="Abhilash" height={550} width={400} />
        </div>
        <div className={cardStyles.content}>
          <div className={cardStyles.contentBx}>
            <h3>
              Abhilash Banerjee
              <br />
              <span>Frontend Developer</span>
            </h3>
          </div>
          <ul className={cardStyles.sci}>
            <li styles="--i:1">
              <a href="https://github.com/abhilash-banerjee99">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li styles="--i:2">
              <a href="https://www.linkedin.com/in/abhilash-banerjee-741881148/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cardStyles.card}>
        <div className={cardStyles.imgBx}>
          <Image src={Adi} alt="Aditya" height={550} width={400} />
        </div>
        <div className={cardStyles.content}>
          <div className={cardStyles.contentBx}>
            <h3>
              Aditya Das
              <br />
              <span>UI/UX Designer</span>
            </h3>
          </div>
          <ul className={cardStyles.sci}>
            <li styles="--i:1">
              <a href="https://github.com/Delta0077">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li styles="--i:2">
              <a href="https://www.linkedin.com/in/aditya-das-250365200/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cardStyles.card}>
        <div className={cardStyles.imgBx}>
          <Image src={Ani} alt="Anindya" height={550} width={400} />
        </div>
        <div className={cardStyles.content}>
          <div className={cardStyles.contentBx}>
            <h3>
              Anindya Chowdhury
              <br />
              <span>DevOps</span>
            </h3>
          </div>
          <ul className={cardStyles.sci}>
            <li styles="--i:1">
              <a href="https://github.com/41X3n">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li styles="--i:2">
              <a href="https://www.linkedin.com/in/anindya-41x3n/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cardStyles.card}>
        <div className={cardStyles.imgBx}>
          <Image src={Saumya} alt="Saumya" height={550} width={400} />
        </div>
        <div className={cardStyles.content}>
          <div className={cardStyles.contentBx}>
            <h3>
              Saumya Som
              <br />
              <span>Backend Developer</span>
            </h3>
          </div>
          <ul className={cardStyles.sci}>
            <li styles="--i:1">
              <a href="https://github.com/frostx9">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li styles="--i:2">
              <a href="https://www.linkedin.com/in/saumya-som-394350192/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
