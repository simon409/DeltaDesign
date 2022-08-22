import H3 from "@material-tailwind/react/Heading3";
import Paragraph from "@material-tailwind/react/Paragraph";
import Input from "@material-tailwind/react/Input";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Icon } from "@material-tailwind/react";
import Textarea from "@material-tailwind/react/Textarea";
import emailjs from "@emailjs/browser";
import Button from "@material-tailwind/react/Button";

export default function Form() {
  const [t] = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bacqc5q",
        "template_u11wg8a",
        e.target,
        "kRU57Dtesk_4ADBGb"
      )
      .then(
        (result) => {
          document.getElementById("alert").style.display = "block";
        },
        (error) => {
          document.getElementById("alert_danger").style.display = "block";
        }
      );
  };
  return (
    <div className="flex flex-wrap justify-center mt-24">
      <div className="w-full lg:w-10/12 px-4">
        <div className="relative flex lg:flex-row flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto w-full p-5 lg:p-10">
            <H3 color="gray">{t("more_info")}</H3>
            <div className="w-full flex-row mt-10">
              <div className="text-blue-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
                <Icon name="phone" size="xl" />
              </div>
              <span className="inline-block font-bold ml-8" color="gray">
                0611051318
              </span>
            </div>
            <div className="w-full flex-row mt-2">
              <div className="text-blue-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
                <Icon name="mail" size="xl" />
              </div>
              <span className="inline-block font-bold ml-8" color="gray">
                deltadesign167@gmail.com
              </span>
            </div>
            <div className="w-full flex-row mt-2">
              <div className="text-blue-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
                <Icon name="my_location" size="xl" />
              </div>
              <span className="inline-block font-bold ml-8" color="gray">
                El Jadida, Morocco
              </span>
            </div>
          </div>
          <div className="line"></div>
          <hr className="my-6 border-gray-300 lg:hidden" />
          <div className="flex-auto w-full p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="gray">{t("want_work")}</H3>
              <Paragraph color="blueGray">{t("comp_form")}</Paragraph>
            </div>
            <div
              id="alert"
              class="p-4 hidden mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <span class="font-medium">{t("message_sent")}</span>
              {t("message_sent_p2")}
            </div>
            <div
              id="alert_danger"
              class="p-4 mb-4 text-sm text-red-700 hidden bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span class="font-medium">{t("message_not_sent")}</span>
              {t("message_not_sent_p2")}
            </div>
            <form onSubmit={sendEmail}>
              <div className="flex gap-8 mt-5 mb-12">
                <Input
                  type="text"
                  name="full_name"
                  placeholder={t("f_name")}
                  color="lightBlue"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={t("mail")}
                  color="lightBlue"
                />
              </div>

              <div className="mb-12">
                <Input
                  type="number"
                  name="phone"
                  placeholder={t("phone_num")}
                  color="lightBlue"
                />
              </div>

              <Textarea
                color="lightBlue"
                placeholder="Message"
                name="message"
              />

              <div className="flex justify-center mt-10">
                <Button color="lightBlue" ripple="light">
                  {t("send_message")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
