import { DownloadOutlined } from "@ant-design/icons";
import AntButton from "../components/AntButton/AntButton";
import HeroPic from "../components/HeroPic/HeroPic";
import { HeroName } from "../components/Titles/Titles";
import styles from "./pages.module.css";
import { Divider } from "antd";

const Profile = () => {
  const cvThomasPath = "./CV_Thomas_Cionek_EN.pdf";

  return (
    <section id="home" className="centered">
      <div className={styles.hero}>
        <br />
        <HeroPic />
        <div className={styles.section__text}>
          <HeroName name="Thomas Cionek" role="Full Stack Developer" />
          <div className="btn-container">
            <AntButton
              type="text"
              onClick={() => {
                window.open(cvThomasPath, "_blank");
              }}
            >
              <DownloadOutlined />
              Download CV
            </AntButton>
            <AntButton onClick={() => {}}>Let's Talk</AntButton>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Profile;
