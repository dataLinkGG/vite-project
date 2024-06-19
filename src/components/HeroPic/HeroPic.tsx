import profilePic from "../../assets/profile-pic.jpg";
import styles from "./HeroPic.module.css";

const HeroPic = () => {
  return (
    <img
      className={styles.profilePicture}
      src={profilePic}
      alt="Profile Picture"
    />
  );
};

export default HeroPic;
