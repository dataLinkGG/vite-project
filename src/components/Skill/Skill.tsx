import styles from "./Skill.module.css";

type proficiencyLevel = 1 | 2 | 3;

type proficiencyMap = {
  [key in proficiencyLevel]: string;
};

const proficiencyMap: proficiencyMap = {
  1: "Beginner",
  2: "Intermediate",
  3: "Proficient",
};

type SkillProps = {
  name: string;
  expertise?: number;
  icon?: string;
};

const Skill: React.FC<SkillProps> = ({ name, expertise, icon }) => {
  const expertiseText = proficiencyMap[expertise as proficiencyLevel] ?? "";

  return (
    <article>
      <img
        src={icon || "thomascionek/assets/checkmark.png"}
        alt={`Experience in ${name}`}
        className={styles.icon}
      />
      <div>
        <h1>{name}</h1>
        <div className={styles[`proficiency${expertise}`]}>{expertiseText}</div>
      </div>
    </article>
  );
};

export default Skill;
