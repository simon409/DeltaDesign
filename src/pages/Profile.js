import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/profile/Header";
import Content from "components/profile/Content";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

export default function Profile() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <Content />
        <InstagramFeed
          token="IGQVJWeHR3X3pOUkI5eFI2anJIQ1NtSmRoS05pbEw1emNiX2s4ckNDQkVOQ3I3VEsyN1NteC1zcmdYc1UzU0tBcmtOWkZADUHJPMVdDUFY2Y043bWR5RWV5dC1TeE9YSVFJTC1zSlpmNmNDd01OS3FiMQZDZD"
          counter="1"
        />
      </main>
      <DefaultFooter />
    </>
  );
}
