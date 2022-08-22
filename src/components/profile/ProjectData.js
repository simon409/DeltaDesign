import React, { useState } from "react";
import { Image } from "@material-tailwind/react";
import Button from "@material-tailwind/react/Button";
import Papa from "papaparse";

const ProjectData = (search) => {
  const [data, setData] = useState({})
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjjIvAYzEcrYs4Z8Shoo3Oa5anmUW-VVtmOfDAj_XY64MQA4cuFlg2IQbRpEPADYbtKXobJM2GuGXQ/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  //imagecleared = imageurl.replace("/d/file/", "uc?view&id=");
  const movies = Array.from(data);
  return (
    <div className="projectgrid mt-24">
      {movies.map((data) => (
        <div className="flex flex-col shadow-md rounded-md p-5">
          <Image className="w-full" src={data.image} alt="drive image" />
          <div className="p-5">
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <h1 className="text-sm font-light">{data.type}</h1>
          </div>
          <a href="#pablo" className="w-30" onClick={(e) => e.preventDefault()}>
            <Button color="lightBlue" buttonType="link" ripple="dark">
              Show App
            </Button>
          </a>
        </div>
      ))}
    </div>
  );
};
export default ProjectData;
