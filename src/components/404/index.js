import React from "react";
import "./index.css";

import { useTranslation } from "react-i18next";

function ErrorCom() {
  const [t] = useTranslation();
  return (
    <>
      <div className="errorcontainer">
        <div id="error3">
          <div id="error3" title="(._.)">
            (._.)
          </div>
        </div>
        <div id="error">
          <div id="error" title="404">
            404
          </div>
        </div>
        <div id="error2">
          <h1 id="error2" className="text-4xl" title={t("page_not_found")}>
            {t("page_not_found")}
          </h1>
        </div>
        <a href="/" className="glitch-btn underlined">
          <div class="texthover underlined">{t("go_home")}</div>
          <div class="mask">
            <span>{t("go_home")}</span>
          </div>
          <div class="mask">
            <span>{t("go_home")}</span>
          </div>
          <div class="mask">
            <span>{t("go_home")}</span>
          </div>
          <div class="mask">
            <span>{t("go_home")}</span>
          </div>
          <div class="mask">
            <span>{t("go_home")}</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default ErrorCom;
