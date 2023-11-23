import { ModuleTitle } from "../../components/ModuleTitle";

import { Swiper } from "./Swiper";

export const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ModuleTitle
        title="Projects"
        subtitle="I had the pleasure of working with these awesome projects"
      />
      <div className="w-1/2 flex items-center justify-center py-10">
        <Swiper />
      </div>
    </div>
  );
};
