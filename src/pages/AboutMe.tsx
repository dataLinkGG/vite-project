import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/Titles/Titles";
import Card from "../components/Card/Card";

function AboutMe() {
  return (
    <>
      <section className="centered">
        <SectionTitle intro="Get to know more" title="About me" />
        <div className="cards">
          <Card
            title="Experience"
            description="Alude YC w20"
            icon={faBriefcase}
            modalTitle={"Experience"}
          >
            Worked with Python, JavaScript, TypeScript, and PostgreSQL.
            Interactively customized React components from Ant Design based on
            the product models of Figma, working in Scrum methodology, with Code
            Reviews, product and team retrospectives meetings. Engagingly
            implemented back-end library functionalities and actively interacted
            with the database.
          </Card>
          <Card
            title="Education"
            description="Strategic Planning and Analysis Systems Development"
            icon={faGraduationCap}
            modalTitle={"Education"}
          >
            Solid foundation in Linux, having used various distributions for
            nearly 10 years, with a keen interest in experimenting with
            commands, customization, and troubleshooting. Gained international
            exposure during a 4-year stint in Poland, where he studied Computer
            Science and interacted with exchange students from around the world.
          </Card>
          <Card
            title="Goals"
            description="My goals..."
            icon={faGraduationCap}
            modalTitle={"Education"}
          />
        </div>
      </section>
    </>
  );
}

export default AboutMe;
