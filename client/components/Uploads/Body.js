import Drop from "./Drop";
import bodyStyles from "../../styles/Body.module.css";

const Body = () => {
  return (
    <div>
      <div className={bodyStyles.bodyContainer}>
        <div className={bodyStyles.glass}>
          <Drop />
        </div>
        <div className={bodyStyles.circle1}></div>
        <div className={bodyStyles.circle2}></div>
        <div className={bodyStyles.textContainer}>
          <p className={bodyStyles.keyFeatures}>Encrypted. Anonymous.</p>
          <p className={bodyStyles.p}>
            Share your files over encrypted network without getting tracked
          </p>
        </div>
      </div>
      <div className={bodyStyles.webrtcContainer}>
        <div className={bodyStyles.textContainerReverse}>
          <p className={bodyStyles.keyFeatures}>Encrypted. Anonymous.</p>
          <p className={bodyStyles.p}>
            Share your files over encrypted network without getting tracked
          </p>
        </div>
        <div className={bodyStyles.glassReverse}>
          <Drop />
        </div>
        <div className={bodyStyles.circle1}></div>
        <div className={bodyStyles.circle2}></div>
      </div>
      <div className={bodyStyles.bodyContainer}>
        <div className={bodyStyles.glass}>
          <Drop />
        </div>
        <div className={bodyStyles.circle1}></div>
        <div className={bodyStyles.circle2}></div>
        <div className={bodyStyles.textContainer}>
          <p className={bodyStyles.keyFeatures}>Encrypted. Anonymous.</p>
          <p className={bodyStyles.p}>
            Share your files over encrypted network without getting tracked
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
