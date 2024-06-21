import AntButton from "../components/AntButton/AntButton";
import HeroPic from "../components/HeroPic/HeroPic";
import { HeroName } from "../components/Titles/Titles";
import styles from "./pages.module.css";
import { Tooltip } from "antd";

import { DownOutlined, DownloadOutlined } from "@ant-design/icons";

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
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tooltip title="🖱️️ Scroll down">
          <div className="animated-icon">
            <a href="#about" style={{ color: "var(--text-color)" }}>
              <DownOutlined />
            </a>
          </div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Profile;
