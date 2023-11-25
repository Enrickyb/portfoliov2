import { ModuleTitle } from "../../components/ModuleTitle";

import { Swiper } from "./Swiper";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center my-32">
      <ModuleTitle
        title={t("presentation.projects")}
        subtitle={t("presentation.projectsdesc")}
      />
      <div className="xl:w-1/2 px-4 md:w-4/5 w-full flex items-center justify-center py-10">
        <Swiper />
      </div>
    </div>
  );
};
