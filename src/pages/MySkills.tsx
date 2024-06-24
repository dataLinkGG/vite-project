import { SectionTitle } from "../components/Titles/Titles";
import Skill from "../components/Skill/Skill";
import Slot from "../components/Slot/Slot";

const MySkills = () => {
  return (
    <section id="skills" className="centered">
      <SectionTitle intro="Explore my" title="Skills" />
      <Slot>
        <Skill
          name="JavaScript"
          expertise={3}
          tooltipTitle="JavaScript, which started as a scripting language, is now widely used to enhance web page functionality, including animations, dynamic content updates, and user interactions."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </Skill>
        <Skill
          name="Python"
          expertise={2}
          tooltipTitle="Python is a high-level, general-purpose programming language known for its simplicity and vast standard library."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        </Skill>
        <Skill
          name="PostegreSQL"
          expertise={1}
          tooltipTitle="PostgreSQL is relational database management system that emphasizes extensibility and SQL compliance. It is known for its high levels of resilience, integrity, and correctness."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
        </Skill>
        <Skill
          name="TypeScript"
          tooltipTitle="TypeScript is a superset of JavaScript that adds optional static type annotations, which can make the development of large-scale applications safer and more scalable."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </Skill>
        <Skill
          name="React"
          tooltipTitle="React is a JavaScript library that builds interfaces like chemistry: tiny, reusable components (atoms & buttons) combine to form bigger UI elements (molecules & forms)."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        </Skill>
        <Skill name="Flask">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
        </Skill>
        <Skill name="Linux">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
        </Skill>
        <Skill
          name="Git"
          tooltipTitle="Just like a time traveler, Git allows going back to any previous version of your code, see what changes were made, restore an older version if needed and even creating different time-lines - the so called branches, or detached universes, thought a fork."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        </Skill>
        <Skill name="Figma">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        </Skill>
        <Skill
          name="AntDesign"
          tooltipTitle="A design language and a set of UI components for building scalable and maintainable applications."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg" />
        </Skill>

        <Skill
          name="Vim"
          tooltipTitle="Vim is a keyboard-focused editor with unique modes (command, insert, visual) for efficient editing without a mouse. Its shortcuts are transferable across many editors and tools."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" />
        </Skill>
        <Skill
          name="Docker"
          tooltipTitle="Docker packages apps in self-contained containers built from images. Imagine Lego bricks for software - each container runs isolated, sharing the host's OS. Volumes store data outside containers, so it persists even when they stop or restart."
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
        </Skill>
      </Slot>
    </section>
  );
};

export default MySkills;
