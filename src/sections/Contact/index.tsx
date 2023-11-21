import { ModuleTitle } from "../../components/ModuleTitle";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <section className="bg-bg1 pt-32 pb-28">
      <div>
        <ModuleTitle
          title="Contact"
          subtitle="I'm currently available for freelance work"
        />
        <Form />
      </div>
    </section>
  );
};
