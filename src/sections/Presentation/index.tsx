import { useTranslation } from "react-i18next";
import pphoto from "../../assets/pfoto.jpeg";
import emailbutton from "../../assets/icons/emailbutton.svg";

export const Presentation = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-row flex-wrap items-center justify-center gap-32 mt-16">
      <div className="w-fit pl-6 pr-14 py-9 rounded-ss-[160px] rounded-ee-[160px] border-white border-[4px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-8 text-white">
          <img
            src={pphoto}
            className="rounded-full w-[105px] border-2 border-brand1"
            alt="profile photo"
          />
          <h1 className="mt-4">Enricky</h1>
          <p className="font-ibmRegular text-sm">{t("presentation.stack")}</p>
        </div>
        <div className="text-white">
          <ul className="font-ibmRegular text-sm flex flex-col gap-4">
            <li className="flex flex-row gap-4 items-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.583361 2.48988C0.583267 2.49564 0.583257 2.50139 0.583333 2.50715V9.5C0.583333 10.4638 1.3695 11.25 2.33333 11.25H11.6667C12.6305 11.25 13.4167 10.4638 13.4167 9.5V2.50721C13.4167 2.50141 13.4167 2.4956 13.4166 2.4898C13.4111 1.53063 12.6271 0.75 11.6667 0.75H2.33333C1.37287 0.75 0.588839 1.53067 0.583361 2.48988ZM1.81217 2.2398C1.90864 2.04904 2.10702 1.91667 2.33333 1.91667H11.6667C11.893 1.91667 12.0914 2.04904 12.1878 2.2398L7 5.87128L1.81217 2.2398ZM12.25 3.62038V9.5C12.25 9.8195 11.9862 10.0833 11.6667 10.0833H2.33333C2.01383 10.0833 1.75 9.8195 1.75 9.5V3.62038L6.66548 7.06122C6.86633 7.20182 7.13367 7.20182 7.33452 7.06122L12.25 3.62038Z"
                  fill="#D7A700"
                />
              </svg>
              <a href="mailto:enrickyb@hotmail.com">enrickyb@hotmail.com</a>
            </li>
            <li className="flex flex-row gap-4 items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99999 3.5C4.71133 3.5 3.66666 4.54467 3.66666 5.83333C3.66666 7.122 4.71133 8.16667 5.99999 8.16667C7.28865 8.16667 8.33332 7.122 8.33332 5.83333C8.33332 4.54467 7.28865 3.5 5.99999 3.5ZM4.83332 5.83333C4.83332 5.189 5.35566 4.66667 5.99999 4.66667C6.64432 4.66667 7.16666 5.189 7.16666 5.83333C7.16666 6.47767 6.64432 7 5.99999 7C5.35566 7 4.83332 6.47767 4.83332 5.83333Z"
                  fill="#D7A700"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.6761 13.9018C5.67627 13.9019 5.67641 13.902 5.99999 13.4167L5.6761 13.9018C5.87204 14.0324 6.12762 14.0327 6.32356 13.902L5.99999 13.4167C6.32356 13.902 6.3234 13.9021 6.32356 13.902L6.32555 13.9007L6.32944 13.8981L6.3428 13.8891C6.35416 13.8813 6.37036 13.8703 6.39108 13.8559C6.43251 13.8272 6.49205 13.7854 6.56711 13.7312C6.71717 13.6228 6.92961 13.4646 7.18368 13.2623C7.69088 12.8584 8.36868 12.275 9.04846 11.5574C10.3842 10.1475 11.8333 8.10947 11.8333 5.83333C11.8333 4.28624 11.2187 2.80251 10.1248 1.70854C9.03082 0.614581 7.54709 0 5.99999 0C4.45289 0 2.96916 0.614581 1.8752 1.70854C0.781238 2.80251 0.166656 4.28624 0.166656 5.83333C0.166656 8.10947 1.61581 10.1475 2.95152 11.5574C3.6313 12.275 4.3091 12.8584 4.8163 13.2623C5.07037 13.4646 5.28281 13.6228 5.43287 13.7312C5.50793 13.7854 5.56747 13.8272 5.6089 13.8559C5.62962 13.8703 5.64582 13.8813 5.65718 13.8891L5.67054 13.8981L5.67443 13.9007L5.6761 13.9018ZM2.70016 2.5335C3.57533 1.65833 4.76231 1.16667 5.99999 1.16667C7.23767 1.16667 8.42465 1.65833 9.29982 2.5335C10.175 3.40867 10.6667 4.59566 10.6667 5.83333C10.6667 7.64053 9.49081 9.39415 8.20152 10.7551C7.5688 11.4229 6.9341 11.9697 6.45693 12.3497C6.27934 12.4911 6.12423 12.6089 5.99999 12.7007C5.87575 12.6089 5.72064 12.4911 5.54305 12.3497C5.06588 11.9697 4.43118 11.4229 3.79846 10.7551C2.50917 9.39415 1.33332 7.64053 1.33332 5.83333C1.33332 4.59566 1.82499 3.40867 2.70016 2.5335Z"
                  fill="#D7A700"
                />
              </svg>
              <p>Brasil</p>
            </li>
            <li className="flex flex-row gap-4 items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.83334 1.16669C5.36922 1.16669 4.9241 1.35106 4.59591 1.67925C4.26772 2.00744 4.08334 2.45256 4.08334 2.91669V3.50002H2.33334C1.36685 3.50002 0.583344 4.28352 0.583344 5.25002V11.0834C0.583344 12.0499 1.36685 12.8334 2.33334 12.8334H11.6667C12.6332 12.8334 13.4167 12.0499 13.4167 11.0834V5.25002C13.4167 4.28352 12.6332 3.50002 11.6667 3.50002H9.91668V2.91669C9.91668 2.45256 9.7323 2.00744 9.40411 1.67925C9.07593 1.35106 8.63081 1.16669 8.16668 1.16669H5.83334ZM8.75001 3.50002V2.91669C8.75001 2.76198 8.68855 2.6136 8.57916 2.50421C8.46976 2.39481 8.32139 2.33335 8.16668 2.33335H5.83334C5.67863 2.33335 5.53026 2.39481 5.42087 2.50421C5.31147 2.6136 5.25001 2.76198 5.25001 2.91669V3.50002H8.75001ZM5.25001 4.66669H8.75001V11.6667H5.25001V4.66669ZM4.08334 4.66669H2.33334C2.01118 4.66669 1.75001 4.92785 1.75001 5.25002V11.0834C1.75001 11.4055 2.01118 11.6667 2.33334 11.6667H4.08334V4.66669ZM9.91668 11.6667V4.66669H11.6667C11.9888 4.66669 12.25 4.92785 12.25 5.25002V11.0834C12.25 11.4055 11.9888 11.6667 11.6667 11.6667H9.91668Z"
                  fill="#D7A700"
                />
              </svg>
              <p>Freelancer</p>
            </li>
            <li className="flex flex-row gap-4 items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z"
                  fill="#D7A700"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z"
                  fill="#D7A700"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z"
                  fill="#D7A700"
                />
              </svg>
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 font-ibmRegular text-sm mt-4">
          <p className="bg-brand1 px-2 rounded-[8px] text-black">JS</p>
          <p className="bg-brand1 px-2 rounded-[8px] text-black">NODE</p>
          <p className="bg-brand1 px-2 rounded-[8px] text-black">TS</p>
          <p className="bg-brand1 px-2 rounded-[8px] text-black">JAVA</p>
        </div>
        <button
          className={`bg-white mt-8 text-black rounded-4xl px-8 py-4 flex flex-row justify-center items-center gap-4`}
        >
          <p>Donwload CV</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L13 12.5858V3Z"
              fill="#292F36"
            />
            <path
              d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V15C2 14.4477 2.44772 14 3 14Z"
              fill="#292F36"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-row gap-32 flex-wrap items-center justify-center px-7">
        <div>
          <div>
            <div>
              <p className="text-brand1">{"<h1>"}</p>
              <div className="ml-6 font-ubuntuRegular">
                <h1 className="text-white md:text-64 text-5xl">
                  {t("presentation.hey")}
                </h1>
                <h1 className="text-white md:text-64 text-5xl">
                  {t("presentation.iam")}
                  <span className="text-brand1 md:text-64 text-5xl">
                    {" "}
                    Enricky
                  </span>
                </h1>
                <h1 className="text-white md:text-64 text-5xl">
                  {t("presentation.stack")}
                </h1>
              </div>
              <p className="text-brand1">{"</h1>"}</p>
              <p className="text-brand1 mt-4">{"<p>"}</p>

              <p className="text-white ml-6">{t("presentation.desc")}</p>
              <p className="text-brand1">{"</p>"}</p>
            </div>
          </div>
          <div className="mt-4">
            <a href="" className="flex flex-row gap-4">
              {" "}
              <h1 className="text-brand1 font-ibmMedium text-[32px]">
                {t("presentation.letstalk")}
              </h1>
              <img src={emailbutton} alt="email button" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-12 h-fit px-8 py-24 bg-bg2 rounded-[80px]">
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-brand1 font-ibmMedium text-5xl">3</h1>
            <p className="text-white font-ibmRegular text-base w-[150px]">
              {t("presentation.planguages")}
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-brand1 font-ibmMedium text-5xl">4</h1>
            <p className="text-white font-ibmRegular text-base w-[150px]">
              {t("presentation.devtools")}
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-brand1 font-ibmMedium text-5xl">2</h1>
            <p className="text-white font-ibmRegular text-base w-[150px]">
              {t("presentation.yearsexperience")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
