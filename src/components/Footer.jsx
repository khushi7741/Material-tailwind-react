import {
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconBroadcast,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  const links = ["about us", "blog", "github", "free products"];
  const resources = ["MIT license", "contribute", "change log", "contact us"];
  return (
    <div>
      <div className="xl:max-w-1280px lg:max-w-1024px md:max-w-768px max-w-425px mx-auto">
        <div className="flex md:flex-row flex-col mb-6 md:gap-0 gap-10 sm:px-0 px-8">
          <div className="flex flex-col gap-4 md:w-1/2 w-full">
            <h2 className="capitalize sm:text-2xl text-xl font-bold">
              material tailwind
            </h2>
            <p className="max-w-64">
              Easy to use React components for Tailwind CSS and Material Design.
            </p>
            <div className="flex gap-7 *:h-5 *:w-5 *:text-gray-600">
              <IconBrandTwitterFilled />
              <IconBrandYoutubeFilled />
              <IconBrandInstagram />
              <IconBroadcast />
            </div>
          </div>
          <div className="flex sm:gap-20 gap-9 md:w-1/2 w-full md:justify-end items-center text-sm">
            <div className="flex flex-col gap-3 capitalize">
              <h6 className="uppercase font-bold">useful links</h6>
              {
                links?.map((v,i) => (
                  <div key={i}>
                    <a href="">{v}</a>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col gap-3 capitalize">
              <h6 className="uppercase font-bold">other resources</h6>
              {
                resources?.map((val,i) => (
                  <div key={i}>
                    <a href="">{val}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="border-b"></div>
        <div className="flex justify-center items-center my-5 sm:px-0 px-8">
          <p className="capitalize text-sm text-gray-500">
            Copyright © 2024 material tailwind by creative team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
