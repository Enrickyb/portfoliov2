type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    techs: string[];
    deploy: string;
    repo: string;
  };
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-center grow-0 w-[600px] h-[500px] bg-bg2 rounded-3xl pt-2">
      <div className="flex flex-col justify-center items-center text-white">
        <div className="flex justify-center items-center w-[95%]">
          <img
            src={`${project.image}`}
            alt={project.name}
            className=" rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold my-4">{project.name}</h3>
          <p className="text-start text-gray-400">{project.description}</p>
        </div>
      </div>
    </div>
  );
};
