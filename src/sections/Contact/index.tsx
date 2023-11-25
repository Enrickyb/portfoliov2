import { ModuleTitle } from "../../components/ModuleTitle";
import { Form } from "./Form";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bg1 pt-32 pb-28">
      <div>
        <ModuleTitle
          title={t("presentation.contact")}
          subtitle={t("presentation.conctactdesc")}
        />
        <Form />
      </div>
    </section>
  );
};
