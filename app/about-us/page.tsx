import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="py-40 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className=" text-4xl  sm:text-6xl text-white drop-shadow-xl font-bold">
            About Us
          </h1>
          <p className="text-white  mt-5 text-lg">
            Revolutionizing the Industry with creativity
          </p>
        </div>
      </div>

      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
