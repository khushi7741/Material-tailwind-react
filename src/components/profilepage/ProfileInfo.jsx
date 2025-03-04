import {
  IconBriefcaseFilled,
  IconBuildingBank,
  IconMapPinFilled,
} from "@tabler/icons-react";
import React from "react";

const ProfileInfo = () => {
  const info = [
    {
      quantity: 22,
      name: "friends",
    },
    {
      quantity: 10,
      name: "photos",
    },
    {
      quantity: 89,
      name: "comments",
    },
  ];
  return (
    <div>
      <div className="xl:max-w-1280px lg:max-w-1024px md:max-w-768px max-w-425px mx-auto">
        <div className="flex md:flex-row flex-col sm:justify-between justify-center items-center sm:px-0 px-8">
          <div className="flex sm:flex-row flex-col gap-3 sm:mb-0 mb-10">
            <div>
              <img
                src="./Images/member3.jpg"
                alt="member3"
                className="rounded-full h-36 w-36 border-2 border-white -translate-y-2/4"
              />
            </div>
            <div className="pt-1 sm:-mt-0 -mt-16">
              <h4 className="capitalize font-bold text-2xl">jenna stones</h4>
              <p className="font-normal text-gray-500 text-lg">jena@mail.com</p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <button className="uppercase text-white bg-sky-400 px-8 py-2 rounded-xl font-bold text-sm -translate-y-full shadow-lg">
                conntect
              </button>
            </div>
            <div className="flex gap-6 md:mb-0 mb-6">
              {info?.map((v, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center"
                >
                  <p className="font-bold text-2xl">{v.quantity}</p>
                  <p className="text-gray-500 capitalize font-normal">
                    {v.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-gray-500 sm:px-0 px-8">
          <div className="flex flex-col gap-3 capitalize font-semibold">
            <div className="flex gap-3">
              <IconMapPinFilled className="h-5 w-5" />
              <span>los angeles,california</span>
            </div>
            <div className="flex gap-3">
              <IconBriefcaseFilled className="h-5 w-5" />
              <p>solution manager - creative team officer</p>
            </div>
            <div className="flex gap-3">
              <IconBuildingBank className="h-5 w-5" />
              <p>university of computer science</p>
            </div>
          </div>
          <div className="max-w-xl">
            <p>
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </p>
          </div>
          <div className="flex sm:justify-start justify-center mb-16">
            <button
              href=""
              className="uppercase text-black/80 font-bold px-5 py-1 text-sm"
            >
              show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
