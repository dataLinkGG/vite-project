import profilePic from "../assets/profile-pic.jpg";
import styles from "./pages.module.css";

const Profile = () => {
  return (
    <section className="centered">
      <div className={styles.hero}>
        <img className={styles.profilePicture} src={profilePic} alt="" />
        <div>
          <h1>Thomas Cionek</h1>
          <p>System Analyst Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
