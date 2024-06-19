import HeroPic from "../components/HeroPic/HeroPic";
import { HeroName } from "../components/Titles/Titles";
import styles from "./pages.module.css";

const Profile = () => {
  return (
    <section className="centered">
      <div className={styles.hero}>
        <HeroPic />
        <div className={styles.section__text}>
          <HeroName name="Thomas Cionek" role="Full Stack Developer" />
          <button>Download CV</button>
          <button>Let's talk</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
