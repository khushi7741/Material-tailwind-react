import { IconMenu2 } from "@tabler/icons-react";
import React from "react";

const Home = () => {
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
            className="h-screen w-full"
            src="/images/team-work.png"
            alt="team-work"
          />
        </div>

        <div className="absolute top-0 left-0 h-screen w-full bg-light-black">
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
                onClick={() => window.alert("hii")}
              />
            </div>
          </div>
          <div className="h-[calc(100vh-84px)] w-full lg:max-w-3xl md:max-w-xl max-w-md mx-auto items-center justify-center flex flex-col gap-4 text-center sm:px-0 px-8">
            <h1 className="md:text-5xl text-xl font-bold">
              Your story starts with us.
            </h1>
            <p className="md:text-lg text-sm font-semibold">
              This is simple aciunt that is make with tailwind css material
              using the frame work of css components based on the Tailwind CSS
              and Material Design by Google.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
