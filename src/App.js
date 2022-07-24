import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Profile from "pages/Profile";
import i18n from "i18n";
import cookies from "cookies/cookie";
// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  if (cookies.get("lang") === "fr") {
    i18n.changeLanguage("fr");
  } else {
    i18n.changeLanguage("en");
  }
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/profile" component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
