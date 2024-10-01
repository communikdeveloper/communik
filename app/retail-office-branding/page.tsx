import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="py-40 bg-blue-700">
        <div className="max-w-6xl mx-auto">
          <h1 className=" text-4xl max-w-2xl sm:text-6xl text-white drop-shadow-xl font-bold">
            Retail/Office Branding Design Solutions
          </h1>
          <p className="text-white max-w-2xl mt-5 text-lg">
            At COMMUNIK, we believe design is the bridge between your brand and
            its audience, whether online or offline.
          </p>
        </div>
      </div>

      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
