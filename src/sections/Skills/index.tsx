import { ModuleTitle } from "../../components/ModuleTitle";
import { SkillsCard } from "./SkillsCard";
import monitor from "../../assets/icons/monitor.svg";
import mobile from "../../assets/icons/mobile.svg";
import android from "../../assets/icons/android.svg";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import java from "../../assets/icons/java.svg";
import { t } from "i18next";
export const Skills = () => {
  return (
    <div className="bg-bg1 h-full w-full py-32 flex flex-col items-center ">
      <ModuleTitle title="Skills" subtitle={t("presentation.skillsubtitle")} />
      <div className="flex flex-col flex-grow-0 items-center mt-16 ">
        <div className="flex flex-row flex-wrap justify-center items-center gap-32">
          <SkillsCard
            borderColor="react"
            icon={monitor}
            title="Web Developement"
            tags={["NodeJS", "Java", "ReactJS"]}
          />
          <SkillsCard
            borderColor="css"
            icon={mobile}
            title="App Developement"
            tags={["React-native", "Android"]}
          />
        </div>
        <div className="flex flex-row gap-32 justify-center items-center mt-20 flex-wrap px-4">
          <div className="flex flex-row gap-10 sm:gap-20 md:gap-32">
            <div className="flex flex-col justify-center items-center gap-6 ">
              <div className="md:w-[144px] md:h-[144px] w-[124px] h-[124px] flex justify-center items-center rounded-full bg-js">
                <img src={javascript} className="md:w-16 w-12" alt="" />
              </div>
              <p className="text-js font-ibmMedium text-ellipsis">JS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 ">
              <div className="md:w-[144px] md:h-[144px] w-[124px] h-[124px] flex justify-center items-center rounded-full bg-react">
                <img src={react} className="md:w-16 w-12" alt="" />
              </div>
              <p className="text-react font-ibmMedium text-ellipsis">REACT</p>
            </div>
          </div>
          <div className="flex flex-row gap-10 sm:gap-20 md:gap-32">
            <div className="flex flex-col justify-center items-center gap-6 ">
              <div className="md:w-[144px] md:h-[144px] w-[124px] h-[124px] flex justify-center items-center rounded-full bg-[#a4c639]">
                <img src={android} className="md:w-16 w-12" alt="" />
              </div>
              <p className="text-[#a4c639] font-ibmMedium text-ellipsis">
                ANDROID
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 ">
              <div className="md:w-[144px] md:h-[144px] w-[124px] h-[124px] flex justify-center items-center rounded-full bg-[#E76F00]">
                <img src={java} className="md:w-16 w-12" alt="" />
              </div>
              <p className="text-[#E76F00] font-ibmMedium text-ellipsis">
                JAVA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
