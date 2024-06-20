import Nav from "./components/NavBar/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MySkills from "./pages/MySkills";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <main className="main-area">
        <Nav />
        <Profile />
        <AboutMe />
        <MySkills />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
