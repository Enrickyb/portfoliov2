type SkillsCardProps = {
  icon: string;
  title: string;
  tags: string[];
  borderColor: string;
};

export const SkillsCard = ({
  icon,
  title,
  tags,
  borderColor,
}: SkillsCardProps) => {
  return (
    <div
      className={`bg-brand1 py-4 px-5 rounded-lg border-l-8 border-${borderColor}`}
    >
      <div className="flex flex-col items-center">
        <img src={icon} alt="" />
        <h1 className="font-ibmRegular text-2xl text-black">{title}</h1>

        <p className="font-ibmRegular text-base text-black">
          {tags.map((tg, i) => (
            <span>
              {tg} {i < tags.length - 1 ? "· " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
