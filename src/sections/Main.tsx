import { Presentation } from "./Presentation";
import { About } from "./About";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <main className="">
      <div id="home"></div>
      <Presentation />
      <div id="about"></div>
      <About />
      <Skills />
      <Projects />
      <div id="contact"></div>
      <Contact />
    </main>
  );
};
