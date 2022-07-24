import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import { useTranslation } from "react-i18next";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/teamwork.jpeg";

export default function WorkingSection() {
  const [t] = useTranslation();
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="emoji_events" title={t("high_quality")}>
            {t("high_quality_desc")}
          </StatusCard>
          <StatusCard
            color="lightBlue"
            icon="autorenew"
            title={t("free_return")}
          >
            {t("free_return_desc")}
          </StatusCard>
          <StatusCard
            color="teal"
            icon="watch_later"
            title={t("exact_at_time")}
          >
            {t("exact_at_time_desc")}
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">{t("Working_with_us")}</H4>
            <LeadText color="blueGray">{t("working_with_us_desc_1")}</LeadText>
            <LeadText color="blueGray">{t("working_with_us_desc_2")}</LeadText>
            <a href="/">
              <Button color="lightBlue" buttonType="link" ripple="dark">
                {t("start_now")}
              </Button>
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">{t("top_notch_service")}</H6>
                <Paragraph color="blueGray">
                  {t("top_notch_service_desc")}
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
