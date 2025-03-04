import {
  IconBrandLinkedinFilled,
  IconBrandTwitterFilled,
  IconWorld,
} from "@tabler/icons-react";
import React from "react";

const Team = () => {
  const team_member = [
    {
      Image: "/images/member1.jpg",
      name: "ryan tompson",
      job_roll: "Web Developer",
      social_icon: [
        {
          icon1: IconBrandTwitterFilled,
          icon2: IconBrandLinkedinFilled,
          icon3: IconWorld,
        },
      ],
    },
    {
      Image: "/images/member2.jpg",
      name: "romina hadid",
      job_roll: "Marketing Specialist",
      social_icon: [
        {
          icon1: IconBrandTwitterFilled,
          icon2: IconBrandLinkedinFilled,
          icon3: IconWorld,
        },
      ],
    },
    {
      Image: "/images/member3.jpg",
      name: "alexa smith",
      job_roll: "UI/Ux Designer",
      social_icon: [
        {
          icon1: IconBrandTwitterFilled,
          icon2: IconBrandLinkedinFilled,
          icon3: IconWorld,
        },
      ],
    },
    {
      Image: "/images/member4.jpg",
      name: "jenna kardi",
      job_roll: "Founder and CEO",
      social_icon: [
        {
          icon1: IconBrandTwitterFilled,
          icon2: IconBrandLinkedinFilled,
          icon3: IconWorld,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="sm:max-w-xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-5 sm:px-0 px-8 mb-24">
          <h4 className="capitalize text-xl font-bold text-black">our team</h4>
          <h2 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold">
            here are our heroes
          </h2>
          <p className="sm:text-lg text-gray-600 font-medium">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
      </div>
      <div className="max-w-1280px mx-auto">
        <div className="px-8 sm:mb-60 mb-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gridcols-1 sm:gap-24 gap-12 w-full">
            {team_member?.map((v, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div>
                  <img
                    src={v.Image}
                    alt="member"
                    className="h-full w-full rounded-full shadow-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h5 className="capitalize text-xl font-bold">{v.name}</h5>
                  <p className="text-gray-500 font-bold text-lg">{v.job_roll}</p>
                </div>
                {v.social_icon?.map((val, i) => (
                  <div key={i} className="flex gap-8 justify-center *:h-6 *:w-6 *:text-sky-500">
                    <val.icon1 />
                    <val.icon2 />
                    <val.icon3 className="!text-red-500" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
