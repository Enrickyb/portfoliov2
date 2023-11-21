import { Presentation } from "./Presentation";
import { About } from "./About";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <main className="">
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};
