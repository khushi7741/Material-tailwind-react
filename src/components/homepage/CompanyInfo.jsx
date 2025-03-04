import { IconMessageFilled } from "@tabler/icons-react";
import React from "react";

const CompanyInfo = () => {
  const company_info = [
    {
      icon: IconMessageFilled,
      title: "awarded agency",
      content:
        "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
    {
      icon: IconMessageFilled,
      title: "free rivisions",
      content:
        "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
    {
      icon: IconMessageFilled,
      title: "verified company",
      content:
        "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
    },
  ];
  return (
    <div>
      <div className="xl:max-w-1280px lg:max-w-1024px md:max-w-768px max-w-425px mx-auto">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 xl:-translate-y-2/4 md:-translate-y-1/4 -translate-y-28 text-center sm:px-0 px-8">
          {company_info?.map((v, i) => (
            <div className="bg-white shadow-lg rounded-lg">
              <div className="p-8 flex flex-col items-center gap-3">
                <div className="bg-black/80 w-12 h-12 rounded-full flex justify-center items-center">
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="capitalize text-xl font-bold">{v.title}</h2>
                <p className="text-gray-600">{v.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
