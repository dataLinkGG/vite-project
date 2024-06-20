import ContactForm from "../components/ContactForm/ContactForm";
import { SectionTitle } from "../components/Titles/Titles";

const ContactMe = () => {
  return (
    <section id="contact" className="centered">
      <SectionTitle intro="Get in touch" title="Contact me" />
      <ContactForm />
    </section>
  );
};

export default ContactMe;
