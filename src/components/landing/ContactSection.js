import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
import Form from "components/landing/Form";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const [t] = useTranslation();
  return (
    <section className="pb-20 relative block bg-gray-100">
      <div className="container max-w-full mx-auto px-4 lg:pt-24">
        <Title heading={t("why_build")}>{t("why_desc")}</Title>

        <div className="flex flex-wrap -mt-12 justify-center">
          <ContactCard icon="stars" title={t("exe_serv")}>
            {t("exe_desc")}
          </ContactCard>
          <ContactCard icon="insert_chart" title={t("grow")}>
            {t("grow_desc")}
          </ContactCard>
          <ContactCard icon="launch" title={t("launch")}>
            {t("launch_desc")}
          </ContactCard>
        </div>
        <Form />
      </div>
    </section>
  );
}
