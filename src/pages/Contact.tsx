import Slot from "../components/Slot/Slot";
import SectionTitle from "../components/Titles/Titles";

function Skills() {
  return (
    <>
      <section className="centered">
        <SectionTitle intro="Explore my" title="Skills" />
        <Slot />
      </section>
    </>
  );
}

export default Skills;
