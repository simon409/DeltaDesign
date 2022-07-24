import H2 from "@material-tailwind/react/Heading2";
import { useTranslation } from "react-i18next";
import LeadText from "@material-tailwind/react/LeadText";

export default function Header() {
  const [t] = useTranslation();
  document.title = t("title");
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">{t("welcome_to_deltadesign")}</H2>
            <div className="text-gray-200">
              <LeadText color="gray-200">{t("your_dream")}</LeadText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
