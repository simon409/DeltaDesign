import React from "react";
import Button from "@material-tailwind/react/Button";
import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Icon from "@material-tailwind/react/Icon";
import ProjectData from "./ProjectData";
import { useEffect, useState } from "react";
import LeadText from "@material-tailwind/react/LeadText";
import ProfilePicture from "assets/img/team-2-800x800.png";

export default function Content() {
  const [searchWord, setsearchWord] = useState(null);
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        alert("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  function search() {}

  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-40 -mt-20">
                    <Image
                      src={ProfilePicture}
                      alt="Profile picture"
                      raised
                      rounded
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                <a
                  href="https://www.instagram.com/delt.adesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="lightBlue" ripple="light">
                    Connect
                  </Button>
                </a>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
              </div>
            </div>

            <div className="text-center my-8">
              <H3 color="gray">DELTADESIGN</H3>
              <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                <Icon name="place" size="xl" />
                El Jadida, Morocco
              </div>
              <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                <Icon name="work" size="xl" />
                Service provider
              </div>
            </div>

            <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </LeadText>
                </div>
              </div>
            </div>

            <div className="mb-10 flex flex-col">
              <h1 className="text-4xl text-center font-bold">Portfolio</h1>
              <div className=" relative">
                <div class="search-box">
                  <input
                    class="search-text"
                    type="search"
                    autoComplete="on"
                    onChange={(e) => setsearchWord(e.target.value)}
                    placeholder="Search Anything"
                  />
                  <button class="search-btn" onClick={search}>
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <ProjectData search={"none" || searchWord} />
            </div>
            <div className="mb-10 py-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
