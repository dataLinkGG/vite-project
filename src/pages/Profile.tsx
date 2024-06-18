import profilePic from "../assets/profile-pic.jpg";
import { HeroName } from "../components/Titles/Titles";
import styles from "./pages.module.css";

const Profile = () => {
  return (
    <section className="centered">
      <div className={styles.hero}>
        <img className={styles.profilePicture} src={profilePic} alt="" />
        <HeroName name="Thomas Cionek" role="Full Stack Developer" />
      </div>
    </section>
  );
};

export default Profile;
