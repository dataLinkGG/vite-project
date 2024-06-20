import { SectionTitle } from "../components/Titles/Titles";
import Skill from "../components/Skill/Skill";
import Slot from "../components/Slot/Slot";

const MySkills = () => {
  return (
    <section id="skills" className="centered">
      <SectionTitle intro="Explore my" title="Skills" />
      <Slot>
        <Skill name="JavaScript" expertise={3}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </Skill>
        <Skill name="Python" expertise={2}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        </Skill>
        <Skill name="PostegreSQL" expertise={1}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
        </Skill>
        <Skill name="TypeScript">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </Skill>
        <Skill name="React">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        </Skill>
        <Skill name="Flask">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
        </Skill>
        <Skill name="Linux">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
        </Skill>
        <Skill name="Git">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        </Skill>
        <Skill name="Figma">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        </Skill>
        <Skill name="AntDesign">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg" />
        </Skill>
      </Slot>
    </section>
  );
};

export default MySkills;
