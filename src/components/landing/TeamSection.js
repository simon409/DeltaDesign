import Title from "components/landing/Title";
import TeamCard from "components/landing/TeamCard";
import Image1 from "assets/img/team-1-800x800.jpeg";
import Image2 from "assets/img/team-2-800x800.png";
import Image3 from "assets/img/team-3-800x800.jpeg";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const [t] = useTranslation();
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading={t("here_our_heroes")}>
          {t("here_our_heroes_desc")}
        </Title>
        <div className="flex flex-wrap justify-center">
          <TeamCard
            img={Image1}
            name="Mohamed Addar"
            position={t("webdev_designer")}
            fb_link="https://www.facebook.com/mohamed.addar.581"
            insta_link="https://www.instagram.com/ssimon_beatz/"
            twitter_link="https://twitter.com/mohamed__addar"
          />
          <TeamCard
            img={Image2}
            name="Someone to add"
            position={t("seo_specialiste")}
            fb_link=""
            insta_link=""
            twitter_link=""
          />
          <TeamCard
            img={Image3}
            name="Karima Abdelli"
            position={t("blogger")}
            fb_link="https://www.facebook.com/karima.abdelli.9"
            insta_link=""
            twitter_link=""
          />
        </div>
      </div>
    </section>
  );
}
