import ContactForm from "../components/ContactForm/ContactForm";
import SectionTitle from "../components/SectionTitle/SectionTitle";

function ContactMe() {
  return (
    <>
      <section className="centered">
        <SectionTitle intro="Get in touch" title="Contact me" />
        <ContactForm />
      </section>
    </>
  );
}

export default ContactMe;
