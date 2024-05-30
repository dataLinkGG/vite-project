import React from "react";
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
  children: React.ReactNode;
};

const Skill: React.FC<SkillProps> = ({ name, expertise, children }) => {
  const expertiseText = proficiencyMap[expertise as proficiencyLevel] ?? "";

  return (
    <div className={styles.skill}>
      {children}
      <div className={styles.skillDetails}>
        <div style={{ width: "fit-content" }}>{name}</div>
        <div className={styles[`proficiency${expertise}`]}>{expertiseText}</div>
      </div>
    </div>
  );
};

export default Skill;
