import { IconMenu2 } from "@tabler/icons-react";
import React from "react";

const ProfileMain = () => {
  const nav_item = [
    {
      link: "/",
      name: "home",
    },
    {
      link: "/profile-page",
      name: "profile",
    },
    {
      link: "/",
      name: "sign in",
    },
    {
      link: "/",
      name: "sign up",
    },
    {
      link: "/",
      name: "docs",
    },
  ];
  return (
    <div>
      <div className="relative text-white">
        <div>
          <img
            className="h-96 w-full"
            src="/images/team-work.png"
            alt="team-work"
          />
        </div>

        <div className="absolute top-0 left-0 h-full w-full bg-light-black">
          <div className="capitalize flex justify-between px-8 py-6 text-lg items-center w-full">
            <div>
              <h3 className="font-bold capitalize">material tailwind react</h3>
            </div>
            <div className="lg:block hidden">
              <ul className="flex gap-10 font-semibold">
                {nav_item?.map((v, i) => (
                  <li key={i}>
                    <a href={v.link}>{v.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:block hidden">
              <div className="flex gap-4 items-center">
                <div>
                  <h4 className="capitalize font-bold">pro vision</h4>
                </div>
                <button className="bg-sky-600 text-white px-4 py-1 rounded-lg capitalize font-bold">
                  free download
                </button>
              </div>
            </div>
            <div className="lg:hidden block">
              <IconMenu2
                className="h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
