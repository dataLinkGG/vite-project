import Slot from "../components/Slot/Slot";
import SectionTitle from "../components/Titles/Titles";

function ContactMe() {
  return (
    <>
      <section className="centered">
        <SectionTitle intro="Get in touch" title="Contact me" />
        <Slot>
          <div>A</div>
        </Slot>
      </section>
    </>
  );
}

export default ContactMe;
