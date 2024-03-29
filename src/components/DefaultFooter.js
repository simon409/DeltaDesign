import H5 from "@material-tailwind/react/Heading5";
import LeadText from "@material-tailwind/react/LeadText";
import { useTranslation } from "react-i18next";
import Icon from "@material-tailwind/react/Icon";

export default function DefaultFooter() {
  const [t] = useTranslation();
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-full lg:w-6/12 px-4">
              <H5 color="gray">DeltaDesign</H5>
              <div className="-mt-4">
                <LeadText color="blueGray">You dream, We make!</LeadText>
              </div>
              <div className="flex gap-2 mt-6 md:justify-center md:mb-8 mb-8 justify-center">
                <a
                  href="https://www.facebook.com/deltadesign.ma"
                  className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-facebook-square" />
                </a>
                <a
                  href="/"
                  className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/delt.adesign/"
                  className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-instagram" />
                </a>
                <a
                  href="/"
                  className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-youtube" />
                </a>
                <a
                  href="/"
                  className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon family="font-awesome" name="fab fa-github" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top">
                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                  <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                    {t("useful_link")}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="/profile"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        {t("about")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                        target="_blank"
                        href="/" //to do
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        {t("News")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                      >
                        {t("discount")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-medium py-1">
                Copyright © {new Date().getFullYear()} DeltaDesign.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
