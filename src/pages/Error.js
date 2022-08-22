import React from "react";
import "assets/styles/error.css";
import ErrorCom from "components/404";

function Error() {
  document.title = "404 - Page Not Found";
  return <ErrorCom />;
}

export default Error;
