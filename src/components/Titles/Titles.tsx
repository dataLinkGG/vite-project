import styles from "./Titles.module.css";

type SectionTitleProps = {
  title: string;
  intro: string;
};

type HeroName = {
  name: string;
  role: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, intro }) => {
  return (
    <div className={styles.sectionTitle}>
      <p>{intro}</p>
      <h1>{title}</h1>
    </div>
  );
};

export const HeroName: React.FC<HeroName> = ({ name, role }) => {
  return (
    <div className={styles.sectionTitle}>
      <h1>{name}</h1>
      <p className={styles.typewriter}>{role}</p>
    </div>
  );
};
