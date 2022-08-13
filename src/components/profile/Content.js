import React, { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";
import ProfilePicture from "assets/img/team-2-800x800.png";

export default function Content() {
  /*const [followers, setfollowers] = useState("");
  const [followings, setfollowings] = useState("");

  const axios = require("axios");
  const options = {
    method: "GET",
    url: "https://instagram-scraper-data.p.rapidapi.com/userinfo/delt.adesign",
    headers: {
      "X-RapidAPI-Key": "bfe0534466msh594413771a3535cp1df2b9jsn2c40a0cb67e8",
      "X-RapidAPI-Host": "instagram-scraper-data.p.rapidapi.com",
    },
  };

  const getFollowers = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //setfollowers(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getFollowings = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        //setfollowings(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  getFollowers();
  getFollowings();*/

  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
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
                <Button color="lightBlue" ripple="light">
                  Connect
                </Button>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      22
                    </span>
                    <span className="text-sm text-gray-700">Followers</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      10
                    </span>
                    <span className="text-sm text-gray-700">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                      89
                    </span>
                    <span className="text-sm text-gray-700">Followings</span>
                  </div>
                </div>
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
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <Button color="lightBlue" buttonType="link" ripple="dark">
                      Show more
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-10 py-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
