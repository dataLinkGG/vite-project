import Skill from "../components/Skill/Skill";
import Slot from "../components/Slot/Slot";
import SectionTitle from "../components/Titles/Titles";

function MySkills() {
  return (
    <>
      <section className="centered">
        <SectionTitle intro="Explore my" title="Skills" />
        <Slot>
          <Skill name="Python" expertise={3}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          </Skill>
          <Skill name="JavaScript" expertise={3}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </Skill>
          <Skill name="JavaScript" expertise={2}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
          </Skill>
        </Slot>
      </section>
    </>
  );
}

export default MySkills;
