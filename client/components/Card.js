import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import cardStyles from "../styles/Card.module.css";

const details = [
  {
    id: 1,
    imageUrl: "https://i.imgur.com/alo3cPB.jpg",
    name: "Abhilash Banerjee",
    domain: "Frontend Developer",
    github: "https://github.com/abhilash-banerjee99",
    linkedIn: "https://www.linkedin.com/in/abhilash-banerjee-741881148/",
  },
  {
    id: 2,
    imageUrl: "https://i.imgur.com/sP1hffj.jpg",
    name: "Aditya Das",
    domain: "UI/UX Designer",
    github: "https://github.com/Delta0077",
    linkedIn: "https://www.linkedin.com/in/aditya-das-250365200/",
  },
  {
    id: 3,
    imageUrl: "https://i.imgur.com/QBJ8AlQ.jpg",
    name: "Anindya Chowdhury",
    domain: "FullStack Developer",
    github: "https://github.com/41X3n",
    linkedIn: "https://www.linkedin.com/in/anindya-41X3n/",
  },
  {
    id: 4,
    imageUrl: "https://i.imgur.com/XxfIzEW.jpg",
    name: "Soumya Som",
    domain: "Backend Developer",
    github: "https://github.com/frostx9",
    linkedIn: "https://www.linkedin.com/in/saumya-som-394350192/",
  },
];

const Card = () => {
  return (
    <div className={cardStyles.container}>
      {details.map(
        (
          { id, name, imageUrl, domain, github, linkedIn } = details // console.log(detail)
        ) => (
          <div className={cardStyles.card}>
            <div key={id} className={cardStyles.imgBx}>
              <img src={imageUrl} width={400} height={450} />
            </div>
            <div className={cardStyles.content}>
              <div className={cardStyles.contentBx}>
                <h3>{name}</h3>
                <center>
                  <span>{domain}</span>
                </center>
                <br />
              </div>
              <ul className={cardStyles.sci}>
                <li styles="--i:1">
                  <a href={github}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li styles="--i:2">
                  <a href={linkedIn}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
