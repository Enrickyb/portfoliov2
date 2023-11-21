import { t } from "i18next";
import titleMouse from "../../assets/icons/titlemouse.svg";
import devImage from "../../assets/devimage.png";

export const About = () => {
  return (
    <div className="mt-32 bg-aboutimg bg-no-repeat bg-center bg-cover w-full h-full px-6 lg:px-32 py-16 lg:py-32 flex flex-col items-center">
      <div className="text-center">
        <img src={titleMouse} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center mt-8 lg:mt-32 gap-8 xl:gap-32">
        <div className="text-center lg:text-left">
          <h1 className="text-white font-ubuntuRegular text-2xl lg:text-4xl bg-bg1 border-brand1 border inline-block rounded-ss-[40px] rounded-ee-[40px] px-8 py-2">
            {t("presentation.aboutMe")}
          </h1>
          <div className="max-w-lg lg:max-w-3xl md:min-w-[500px] mt-8 rounded-lg px-6 lg:px-10 py-6 bg-bg1">
            <p className="text-brand1 mb-4">{"<p>"}</p>
            <h1 className="text-brand1 font-ibmMedium text-xl lg:text-2xl ml-6 mb-4">
              Hello!
            </h1>
            <p className="text-white ml-6 font-ibmRegular text-base lg:text-lg mb-4">
              My name is Sinan, and I specialize in web development that
              utilizes HTML, CSS, JS, and REACT, etc.
            </p>
            <p className="text-white ml-6 font-ibmRegular text-base lg:text-lg mb-4">
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving. When I'm not coding, I am
              writing blogs, reading, or picking up some new hands-on art
              project like photography.
            </p>
            <p className="text-white ml-6 font-ibmRegular text-base lg:text-lg mb-4">
              I like to have my perspective and belief systems challenged so
              that I see the world through new eyes.
            </p>
            <p className="text-brand1">{"</p>"}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={devImage}
            alt=""
            className="w-full h-auto max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
