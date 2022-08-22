import Title from "components/landing/Title";
import StatusCard from "components/landing/StatusCard";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const [t] = useTranslation();
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Our services"></Title>
        <div className="flex">
          <div className="flex flex-wrap relative z-50">
            <StatusCard color="red" icon="color_lens" title={t("ui/ux_design")}>
              {t("high_quality_desc")}
            </StatusCard>
            <StatusCard
              color="lightBlue"
              icon="code"
              title={t("website_creation")}
            >
              {t("free_return_desc")}
            </StatusCard>
            <StatusCard
              color="teal"
              icon="movie_creation"
              title={t("video_editing")}
            >
              {t("exact_at_time_desc")}
            </StatusCard>

            <StatusCard
              color="deepOrange"
              icon="design_services"
              title={t("graphic_design")}
            >
              {t("exact_at_time_desc")}
            </StatusCard>
            <StatusCard color="amber" icon="ads_click" title={t("ads_making")}>
              {t("exact_at_time_desc")}
            </StatusCard>
            <StatusCard
              color="deepPurple"
              icon="create"
              title={t("office_services")}
            >
              {t("exact_at_time_desc")}
            </StatusCard>
          </div>
        </div>
      </div>
    </section>
  );
}
