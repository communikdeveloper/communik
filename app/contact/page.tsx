import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import { ContactFormComponent } from "@/components/contact-form";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="  pt-40  pb-20  relative">
        <Image src="/bg/bg1.png" width={3000}  height={3000} alt="" className=" object-cover inset-0 -z-10 absolute w-full h-full " />
        <div className="max-w-6xl mx-auto z-10">
          <h1 className=" text-4xl text-center sm:text-6xl text-white drop-shadow-xl font-bold">
            Contact US
          </h1>
          <p  className="text-yellow-400 mt-4 text-lg text-center">Revolutionizing the Industry with creativity</p>
        </div>
      </div>
      <ContactFormComponent />
      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
