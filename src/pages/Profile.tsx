import HeroPic from "../components/HeroPic/HeroPic";
import { HeroName } from "../components/Titles/Titles";
import styles from "./pages.module.css";

const Profile = () => {
  return (
    <section className="centered">
      <div className={styles.hero}>
        <HeroPic />
        <HeroName name="Thomas Cionek" role="Full Stack Developer" />;
      </div>
    </section>
  );
};

export default Profile;
