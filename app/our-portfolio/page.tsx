import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="py-40 bg-blue-700">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className=" text-4xl  sm:text-6xl text-white drop-shadow-xl font-bold">
            Our Portfolio
          </h1>
          <p className="text-white  max-w-xl mx-auto mt-5 text-lg">
            At COMMUNIK, we believe design is the bridge between your brand and
            its audience, whether online or offline.
          </p>
        </div>
      </div>
      <Projects/>
      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
