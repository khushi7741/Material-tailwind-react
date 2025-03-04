import {
  IconBackground,
  IconBriefcaseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import React from "react";

const CoWorking = () => {
  const facility = [
    {
      icon: IconBriefcaseFilled,
      title: "excelent services",
      content:
        "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
    {
      icon: IconBackground,
      title: "grow your market",
      content:
        "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
    {
      icon: IconPlayerPlayFilled,
      title: "launch time",
      content:
        "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
  ];
  return (
    <div>
      <div className="sm:max-w-xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-5 sm:px-0 px-8 mb-24">
          <h4 className="capitalize text-xl font-bold text-black">
            co-working
          </h4>
          <h2 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold">
            build something
          </h2>
          <p className="sm:text-lg text-gray-600 font-medium">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div className="xl:max-w-1280px lg:max-w-1024px md:max-w-768px max-w-425px mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 text-center sm:mb-48 mb-20 sm:px-0 px-8">
          {facility?.map((v, i) => (
              <div className="flex flex-col items-center gap-3">
                <div className="bg-black/80 w-12 h-12 rounded-full flex justify-center items-center">
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="capitalize text-xl font-bold">{v.title}</h2>
                <p className="text-gray-600">{v.content}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoWorking;
