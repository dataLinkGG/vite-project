import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card/Card";
import SectionTitle from "./components/Titles/Titles";

function App() {
  return (
    <>
      <main className="main-area">
        <section className="centered">
          <SectionTitle intro="Get to know more" title="About me" />
          <div className="cards">
            <Card
              title="Eduction"
              description="Strategic Planning and Analysis Systems Development"
              icon={faGraduationCap}
              modalTitle={"Education"}
            >
              Solid foundation in Linux, having used various distributions for
              nearly 10 years, with a keen interest in experimenting with
              commands, customization, and troubleshooting. Gained international
              exposure during a 4-year stint in Poland, where he studied
              Computer Science and interacted with exchange students from around
              the world.
            </Card>
            <Card
              title="Eduction"
              description="Strategic Planning and Analysis Systems Development"
              icon={faGraduationCap}
              modalTitle={"Education"}
            >
              Solid foundation in Linux, having used various distributions for
              nearly 10 years, with a keen interest in experimenting with
              commands, customization, and troubleshooting. Gained international
              exposure during a 4-year stint in Poland, where he studied
              Computer Science and interacted with exchange students from around
              the world.
            </Card>
            <Card
              title="Eduction"
              description="Strategic Planning and Analysis Systems Development"
              icon={faGraduationCap}
              modalTitle={"Education"}
            >
              Solid foundation in Linux, having used various distributions for
              nearly 10 years, with a keen interest in experimenting with
              commands, customization, and troubleshooting. Gained international
              exposure during a 4-year stint in Poland, where he studied
              Computer Science and interacted with exchange students from around
              the world.
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
