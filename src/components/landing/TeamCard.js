import Image from "@material-tailwind/react/Image";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function LandingTeamCard({
  img,
  name,
  position,
  fb_link,
  insta_link,
  twitter_link,
}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <Image src={img} alt={name} raised />
        <div className="pt-6 text-center">
          <H6 color="gray">{name}</H6>
          <Paragraph color="blueGray">{position}</Paragraph>
          <div className="flex items-center justify-center">
            <a href={fb_link} target="_blank" rel="noreferrer">
              <Button
                color="blue"
                buttonType="link"
                ripple="dark"
                rounded
                iconOnly
              >
                <Icon
                  family="font-awesome"
                  name="fab fa-facebook-f"
                  size="lg"
                />
              </Button>
            </a>
            <a href={insta_link} target="_blank" rel="noreferrer">
              <Button
                color="pink"
                buttonType="link"
                ripple="dark"
                rounded
                iconOnly
              >
                <Icon family="font-awesome" name="fab fa-instagram" size="lg" />
              </Button>
            </a>
            <a href={twitter_link} target="_blank" rel="noreferrer">
              <Button
                color="lightBlue"
                buttonType="link"
                ripple="dark"
                rounded
                iconOnly
              >
                <Icon family="font-awesome" name="fab fa-twitter" size="lg" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
