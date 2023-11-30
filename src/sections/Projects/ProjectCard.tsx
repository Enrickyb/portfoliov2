import { t } from "i18next";

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    techs: string[];
    tag: string;
    deploy: string;
    repo: string;
    date: string;
    formatName: string;
  };
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-start pt-6 pb-3 grow-0 w-[900px] bg-bg2 rounded-2xl max-w-[780px] mb-10">
      <div className="flex flex-col justify-center text-white">
        <div className="flex justify-center items-center self-center w-[95%] ">
          <a href={project.deploy} target="_blank">
            <img
              src={`${project.image}`}
              alt={project.name}
              className="rounded-xl"
            />
          </a>
        </div>

        <div className="flex flex-col justify-center items-start px-6 mt-4">
          <div className="flex flex-row items-center justify-between w-full mb-3">
            <a href={project.deploy} target="_blank">
              <h3 className="text-2xl font-bold my-4 font-ibmMedium text-32 ">
                {project.name}
              </h3>
            </a>
            <p className="bg-white text-[#000] font-ibmRegular  font-bold rounded py-1 px-5">
              {project.tag}
            </p>
          </div>

          <p className="text-start text-gray-400 font-ibmRegular text-sm">
            {t("projects." + project.formatName)}
          </p>
        </div>
      </div>
      <div className="self-end mr-6 mt-5">
        <p className="text-white text-sm font-ibmRegular">
          {t("projects.developin")} {project.date}
        </p>
      </div>
    </div>
  );
};
