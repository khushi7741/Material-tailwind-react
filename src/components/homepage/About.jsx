import { IconFingerprint } from "@tabler/icons-react";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="lg:max-w-1024px md:max-w-768px max-w-425px mx-auto mb-32">
        <div className="flex md:flex-row flex-col sm:px-0 px-8 justify-center items-center gap-20">
          <div className="flex flex-col gap-6">
            <div className="bg-black/80 w-16 h-16 rounded-full flex justify-center items-center">
              <IconFingerprint className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold capitalize">
                working with us is a pleasure
              </h2>
              <p className="text-gray-500 text-base font-normal">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
            </div>
            <p className="text-gray-500 text-base font-normal">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </p>
            <button className="capitalize bg-black/90 text-white px-5 py-2 w-fit rounded-md text-sm font-semibold">
              read more
            </button>
          </div>
          <div className="">
            <div className="bg-white shadow-lg rounded-lg border p-4 flex flex-col gap-4">
              <div>
                <img
                  src="/images/card.png"
                  alt="card"
                  className="rounded-lg h-full w-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="capitalize">enterprise</h3>
                <h2 className="capitalize text-xl font-bold">top notch services</h2>
                <p className="text-gray-500 font-normal">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
