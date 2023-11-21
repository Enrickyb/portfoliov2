import { useTranslation } from "react-i18next";
interface Language {
  nativeName: string;
}
export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const lngs: Record<string, Language> = {
    en: { nativeName: "en" },
    ptbr: { nativeName: "ptbr" },
  };

  return (
    <div className="flex flex-row gap-2">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          className={`${
            i18n.resolvedLanguage === lng ? "text-brand1" : "text-white"
          }`}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};
