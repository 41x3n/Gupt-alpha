import Nav from "../components/Nav";
import AboutUs from "../components/AboutUs";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Nav />
        <div className={styles.glass}></div>
        <div className={styles.btnAbout}>
          <h1>About Us</h1>
        </div>
        <AboutUs />
        <div className={styles.btnMember}>
          <h1>Meet The Team 👍</h1>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default team;
