import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import intro from "assets/videos/delta.mp4";
import { useEffect, useState } from "react";
import "assets/styles/tailwind.css";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
import cookies from "cookies/cookie";
import Services from "components/landing/services";
import TeamSection from "components/landing/TeamSection";
import ContactSection from "components/landing/ContactSection";

export default function Landing() {
  const [collapse, setcollapse] = useState(
    cookies.get("collapsed") ? cookies.get("collapsed") : false
  );
  document.body.style.overflowY = "hidden";
  useEffect(() => {
    if (collapse !== null) {
      if (collapse !== false) {
        document.body.style.overflowY = "scroll";
        return;
      }
    }
    const interval = setInterval(() => {
      try {
        if (collapse === false) {
          setcollapse(true);
          cookies.set("collapsed", true, { path: "/" });
          document.body.style.overflowY = "scroll";
        }
      } catch (err) {
        clearInterval(interval);
      }
    }, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div
        id="delt"
        className={
          collapse
            ? "flex items-center justify-center h-0 bg-white w-full transition-all duration-500 ease-out transform"
            : "flex items-center justify-center h-screen bg-white w-full transition-all duration-500 ease-out transform"
        }
      >
        <div className=" w-1/2 flex items-center justify-center h-screen">
          <div className="w-fit h-fit">
            <video
              src={intro}
              className={
                collapse
                  ? "opacity-0 transition-all duration-500 ease-out transform"
                  : "opacity-100 transition-all duration-500 ease-out transform"
              }
              autoPlay
              muted
            ></video>
          </div>
        </div>
      </div>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <WorkingSection />
        <Services />
        <TeamSection />
        <ContactSection />
      </main>
      <DefaultFooter />
    </>
  );
}
