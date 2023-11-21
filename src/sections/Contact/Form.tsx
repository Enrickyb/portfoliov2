import emailjs from "@emailjs/browser";
import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";

export const Form = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("nl8hTisddrCKvTwjt"), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = "service_34wawgt";
    const templateId = "template_47ra5qi";

    try {
      setLoading(true);

      await emailjs.send(serviceId, templateId, {
        to_name: nameRef.current?.value,
        from_name: emailRef.current?.value,
        message: messageRef.current?.value,
      });

      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-24">
      <form
        className="flex flex-col justify-center items-center gap-16 max-w-[550px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex md:flex-row flex-col gap-16">
          {" "}
          {/* Removed flex-row and gap-16 here */}
          <div className="form_group flex flex-col grow-0 gap-6">
            <label
              htmlFor="name"
              className="text-brand1 font-ubuntuLight text-base"
            >
              {t("presentation.name")}*
            </label>
            <input
              ref={nameRef}
              className="bg-bg1 border-brand1 border-b-2 pb-2 text-white"
              placeholder={t("presentation.entername")}
            />
          </div>
          <div className="form_group flex flex-col grow-0 gap-6">
            <label
              htmlFor="email"
              className="text-brand1 font-ubuntuLight text-base"
            >
              {t("presentation.email")}*
            </label>
            <input
              ref={emailRef}
              type="email"
              className="bg-bg1 border-brand1 border-b-2 pb-2 text-white"
              placeholder={t("presentation.enteremail")}
            />
          </div>
        </div>
        <div className="flex flex-col grow-0 gap-6 mb-20 md:self-stretch">
          <label
            htmlFor="message"
            className="text-brand1 font-ubuntuLight text-base"
          >
            {t("presentation.message")}*
          </label>
          <input
            ref={messageRef}
            type="text"
            className=" bg-bg1 border-brand1 border-b-2 pb-2 text-white"
            placeholder={t("presentation.entermessage")}
          />
        </div>
        <Button
          label={t("presentation.sendmessage")}
          bgColor="brand1"
          textColor="black"
          border="brand1"
          disabled={loading}
        />
      </form>
    </div>
  );
};
