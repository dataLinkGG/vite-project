import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card/Card";
import { SectionTitle } from "../components/Titles/Titles";

const AboutMe = () => {
  return (
    <section id="about" className="centered">
      <SectionTitle intro="Get to know more" title="About me" />
      <div className="cards">
        <Card
          title="Experience"
          description="Alude (YC W20)"
          icon={faBriefcase}
          modalTitle={"Experience"}
        >
          Worked with <b>Python</b>, <b>JavaScript</b>, and <b>PostgreSQL</b>.
          Interactively customized TypeScript React components from Ant Design
          based on the product models of Figma, working in Scrum methodology,
          with Code Reviews, product and team retrospectives meetings.
          Engagingly implemented back-end library functionalities and actively
          interacted with the database.
        </Card>
        <Card
          title="Education"
          description="Analysis and Systems Development"
          icon={faGraduationCap}
          modalTitle={"Education"}
        >
          Solid foundation in Linux, having used various distributions for
          nearly 10 years, with a keen interest in experimenting with commands,
          customization, and troubleshooting. Gained international exposure
          during a 4-year stint in Poland, where he studied Computer Science and
          interacted with exchange students from around the world.
        </Card>
        <Card
          title="Goals"
          description={
            <>
              - Full Stack Development
              <br />- Freelancing
            </>
          }
          icon={faBullseye}
          modalTitle={"Education"}
        />
      </div>
    </section>
  );
};

export default AboutMe;
