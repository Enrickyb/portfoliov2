import { LanguageSelector } from "../LanguageSelector";
import { useState } from "react";
import logo from "../../assets/logoenricky.svg";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
<<<<<<< HEAD
    <header className="bg-bg1 lg:px-20 lg:py-14 md:px-16 md:py-11 sm:px-10 px-5 py-6 max-w-[1920px] m-auto">
=======
    <header className="bg-bg1 lg:px-20 lg:py-14 md:px-16 md:py-11 sm:px-10 px-5 py-6">
>>>>>>> 6c399dbd6dfbd8cd3c4d4de8f105e740621cd23f
      <div className="flex flex-row justify-between">
        <img className="w-48" src={logo} alt="" />
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7H26M4 15H26M4 23H26"
              stroke="#D7A700"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <menu
          className={`lg:flex hidden flex-col lg:flex-row items-center gap-16  ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-row font-ibmRegular text-base sm:text-lg md:text-xl lg:text-2xl text-white gap-8 items-center">
            <li>
              <a href="#home" className="">
                {t("presentation.home")}
              </a>
            </li>
            <li>
              <a href="#about">{t("presentation.aboutMe")}</a>
            </li>
            <li>
              <a href="#contact">{t("presentation.contact")}</a>
            </li>
          </ul>
          <ul className="md:flex hidden flex-row text-white font-ibmRegular text-base gap-8 items-center justify-center">
            <li className="flex flex-row">
              <a href="" className="flex flex-row gap-2 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.11689 6.26543C8.8948 5.86179 9.78019 5.71371 10.6471 5.84226C11.5314 5.97339 12.3501 6.38545 12.9822 7.01758C13.6143 7.64971 14.0264 8.46838 14.1575 9.35268C14.2861 10.2196 14.138 11.105 13.7344 11.8829C13.3307 12.6608 12.6921 13.2916 11.9092 13.6857C11.1264 14.0797 10.2392 14.2168 9.37397 14.0776C8.5087 13.9384 7.70936 13.5298 7.08965 12.9101C6.46994 12.2904 6.06142 11.4911 5.92218 10.6258C5.78295 9.76055 5.9201 8.8734 6.31412 8.09057C6.70814 7.30773 7.33897 6.66908 8.11689 6.26543ZM10.4026 7.4909C9.88249 7.41377 9.35126 7.50262 8.88451 7.7448C8.41776 7.98699 8.03926 8.37018 7.80284 8.83989C7.56643 9.30959 7.48414 9.84187 7.56768 10.361C7.65122 10.8802 7.89634 11.3598 8.26817 11.7316C8.63999 12.1035 9.11959 12.3486 9.63876 12.4321C10.1579 12.5156 10.6902 12.4334 11.1599 12.1969C11.6296 11.9605 12.0128 11.582 12.255 11.1153C12.4972 10.6485 12.586 10.1173 12.5089 9.59715C12.4302 9.06657 12.183 8.57537 11.8037 8.19609C11.4244 7.81682 10.9332 7.56958 10.4026 7.4909Z"
                    fill="#D7A700"
                  />
                  <path
                    d="M14.5833 4.58325C14.123 4.58325 13.7499 4.95635 13.7499 5.41658C13.7499 5.87682 14.123 6.24992 14.5833 6.24992H14.5916C15.0518 6.24992 15.4249 5.87682 15.4249 5.41658C15.4249 4.95635 15.0518 4.58325 14.5916 4.58325H14.5833Z"
                    fill="#D7A700"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.833252 5.83325C0.833252 3.07183 3.07183 0.833252 5.83325 0.833252H14.1666C16.928 0.833252 19.1666 3.07183 19.1666 5.83325V14.1666C19.1666 16.928 16.928 19.1666 14.1666 19.1666H5.83325C3.07183 19.1666 0.833252 16.928 0.833252 14.1666V5.83325ZM5.83325 2.49992C3.9923 2.49992 2.49992 3.9923 2.49992 5.83325V14.1666C2.49992 16.0075 3.9923 17.4999 5.83325 17.4999H14.1666C16.0075 17.4999 17.4999 16.0075 17.4999 14.1666V5.83325C17.4999 3.9923 16.0075 2.49992 14.1666 2.49992H5.83325Z"
                    fill="#D7A700"
                  />
                </svg>
                <p className="2xl:block hidden">Instagram</p>
              </a>
            </li>
            <li>
              <a href="" className="flex flex-row gap-2 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.91016 3.06641L7.42188 3.125C7.42188 3.125 5.23193 3.36426 3.63281 4.64844H3.61328L3.59375 4.66797C3.23486 4.99756 3.07861 5.40283 2.83203 5.99609C2.58545 6.58936 2.32178 7.34619 2.08984 8.18359C1.62598 9.86084 1.25 11.8921 1.25 13.75V13.9062L1.32812 14.0625C1.90674 15.0781 2.93457 15.7251 3.88672 16.1719C4.83887 16.6187 5.66162 16.8555 6.23047 16.875L6.60156 16.8945L6.79688 16.5625L7.48047 15.3516C8.20557 15.5151 9.04053 15.625 10 15.625C10.9595 15.625 11.7944 15.5151 12.5195 15.3516L13.2031 16.5625L13.3984 16.8945L13.7695 16.875C14.3384 16.8555 15.1611 16.6187 16.1133 16.1719C17.0654 15.7251 18.0933 15.0781 18.6719 14.0625L18.75 13.9062V13.75C18.75 11.8921 18.374 9.86084 17.9102 8.18359C17.6782 7.34619 17.4146 6.58936 17.168 5.99609C16.9214 5.40283 16.7651 4.99756 16.4062 4.66797L16.3867 4.64844H16.3672C14.7681 3.36426 12.5781 3.125 12.5781 3.125L12.0898 3.06641L11.9141 3.51562C11.9141 3.51562 11.7334 3.97217 11.6211 4.49219C10.9131 4.39697 10.3345 4.375 10 4.375C9.66553 4.375 9.08691 4.39697 8.37891 4.49219C8.2666 3.97217 8.08594 3.51562 8.08594 3.51562L7.91016 3.06641ZM7.05078 4.49219C7.07764 4.58008 7.10449 4.65576 7.12891 4.72656C6.3208 4.92676 5.45898 5.23193 4.66797 5.72266L5.33203 6.77734C6.95312 5.77148 9.28223 5.625 10 5.625C10.7178 5.625 13.0469 5.77148 14.668 6.77734L15.332 5.72266C14.541 5.23193 13.6792 4.92676 12.8711 4.72656C12.8955 4.65576 12.9224 4.58008 12.9492 4.49219C13.5327 4.60938 14.646 4.87793 15.5664 5.60547C15.5615 5.60791 15.8008 5.96924 16.0156 6.48438C16.2354 7.01416 16.4795 7.71973 16.6992 8.51562C17.1216 10.0415 17.4536 11.8994 17.4805 13.5352C17.0874 14.1357 16.3574 14.6777 15.5859 15.0391C14.9121 15.354 14.3799 15.4688 14.0625 15.5273L13.75 15C13.9355 14.9316 14.1187 14.856 14.2773 14.7852C15.2393 14.3628 15.7617 13.9062 15.7617 13.9062L14.9414 12.9688C14.9414 12.9688 14.5898 13.291 13.7695 13.6523C12.9492 14.0137 11.6968 14.375 10 14.375C8.30322 14.375 7.05078 14.0137 6.23047 13.6523C5.41016 13.291 5.05859 12.9688 5.05859 12.9688L4.23828 13.9062C4.23828 13.9062 4.76074 14.3628 5.72266 14.7852C5.88135 14.856 6.06445 14.9316 6.25 15L5.9375 15.5273C5.62012 15.4688 5.08789 15.354 4.41406 15.0391C3.64258 14.6777 2.9126 14.1357 2.51953 13.5352C2.54639 11.8994 2.87842 10.0415 3.30078 8.51562C3.52051 7.71973 3.76465 7.01416 3.98438 6.48438C4.19922 5.96924 4.43848 5.60791 4.43359 5.60547C5.354 4.87793 6.46729 4.60938 7.05078 4.49219ZM7.8125 8.75C7.3291 8.75 6.90186 9.02588 6.64062 9.375C6.37939 9.72412 6.25 10.1538 6.25 10.625C6.25 11.0962 6.37939 11.5259 6.64062 11.875C6.90186 12.2241 7.3291 12.5 7.8125 12.5C8.2959 12.5 8.72314 12.2241 8.98438 11.875C9.24561 11.5259 9.375 11.0962 9.375 10.625C9.375 10.1538 9.24561 9.72412 8.98438 9.375C8.72314 9.02588 8.2959 8.75 7.8125 8.75ZM12.1875 8.75C11.7041 8.75 11.2769 9.02588 11.0156 9.375C10.7544 9.72412 10.625 10.1538 10.625 10.625C10.625 11.0962 10.7544 11.5259 11.0156 11.875C11.2769 12.2241 11.7041 12.5 12.1875 12.5C12.6709 12.5 13.0981 12.2241 13.3594 11.875C13.6206 11.5259 13.75 11.0962 13.75 10.625C13.75 10.1538 13.6206 9.72412 13.3594 9.375C13.0981 9.02588 12.6709 8.75 12.1875 8.75ZM7.8125 10C7.84668 10 7.89062 10.0122 7.96875 10.1172C8.04688 10.2222 8.125 10.4053 8.125 10.625C8.125 10.8447 8.04688 11.0278 7.96875 11.1328C7.89062 11.2378 7.84668 11.25 7.8125 11.25C7.77832 11.25 7.73438 11.2378 7.65625 11.1328C7.57812 11.0278 7.5 10.8447 7.5 10.625C7.5 10.4053 7.57812 10.2222 7.65625 10.1172C7.73438 10.0122 7.77832 10 7.8125 10ZM12.1875 10C12.2217 10 12.2656 10.0122 12.3438 10.1172C12.4219 10.2222 12.5 10.4053 12.5 10.625C12.5 10.8447 12.4219 11.0278 12.3438 11.1328C12.2656 11.2378 12.2217 11.25 12.1875 11.25C12.1533 11.25 12.1094 11.2378 12.0312 11.1328C11.9531 11.0278 11.875 10.8447 11.875 10.625C11.875 10.4053 11.9531 10.2222 12.0312 10.1172C12.1094 10.0122 12.1533 10 12.1875 10Z"
                    fill="#D7A700"
                  />
                </svg>
                <p className="2xl:block hidden">Discord</p>
              </a>
            </li>
            <li>
              <a href="" className="flex flex-row gap-2 items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0001 0.872314C7.02133 0.872397 5.10716 1.57658 3.60007 2.85885C2.09299 4.14113 1.09135 5.91783 0.774382 7.87105C0.457409 9.82427 0.845786 11.8265 1.87002 13.5196C2.89425 15.2127 4.48751 16.4861 6.3647 17.1119C6.78137 17.1848 6.93762 16.9348 6.93762 16.7161C6.93762 16.5181 6.9272 15.8619 6.9272 15.164C4.83344 15.5494 4.29177 14.6536 4.1251 14.1848C3.94017 13.7289 3.647 13.3249 3.27094 13.0077C2.97927 12.8515 2.5626 12.4661 3.26051 12.4557C3.527 12.4846 3.78259 12.5773 4.00563 12.726C4.22867 12.8747 4.41257 13.0749 4.54177 13.3098C4.65575 13.5146 4.809 13.6948 4.99276 13.8402C5.17652 13.9856 5.38717 14.0934 5.61263 14.1572C5.8381 14.2211 6.07395 14.2398 6.30667 14.2124C6.53939 14.185 6.76441 14.1119 6.96884 13.9973C7.00491 13.5737 7.19372 13.1776 7.5001 12.8828C5.64594 12.6744 3.70844 11.9556 3.70844 8.76817C3.69673 7.93996 4.00234 7.13865 4.5626 6.52859C4.30784 5.80877 4.33765 5.01883 4.64594 4.32026C4.64594 4.32026 5.34383 4.1015 6.9376 5.17442C8.30118 4.7994 9.7407 4.7994 11.1043 5.17442C12.698 4.09109 13.3959 4.32026 13.3959 4.32026C13.7043 5.01882 13.7341 5.80878 13.4793 6.52859C14.0412 7.13761 14.3471 7.93962 14.3334 8.76817C14.3334 11.9661 12.3855 12.6744 10.5314 12.8828C10.7302 13.0843 10.8834 13.3263 10.9805 13.5923C11.0775 13.8584 11.1162 14.1421 11.0939 14.4244C11.0939 15.539 11.0834 16.4348 11.0834 16.7161C11.0834 16.9348 11.2397 17.1953 11.6563 17.1119C13.5302 16.481 15.1189 15.2046 16.1388 13.5107C17.1587 11.8168 17.5433 9.81551 17.2242 7.86418C16.905 5.91285 15.9027 4.13846 14.3963 2.85774C12.8899 1.57702 10.9774 0.873344 9.0001 0.872314Z"
                    fill="#D7A700"
                  />
                </svg>
                <p className="2xl:block hidden">Github</p>
              </a>
            </li>
          </ul>

          <LanguageSelector />
        </menu>
      </div>
    </header>
  );
};
