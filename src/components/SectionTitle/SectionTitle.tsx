import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  intro: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, intro }) => {
  return (
    <div className={styles.sectionTitle}>
      <p>{intro}</p>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
