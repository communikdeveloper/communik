import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="pt-40 pb-10 bg-blue-600 relative ">
      <Image src="/bg/bg1.png" width={3000}  height={3000} alt="" className=" object-cover inset-0  absolute w-full h-full " />

        <div className="max-w-6xl relative z-10 mx-auto">
          <h1 className=" text-4xl max-w-2xl sm:text-6xl text-white drop-shadow-xl font-bold">
            Logo & Brand Identity   <span className="text-yellow-400">Design Solutions</span>
          </h1>
          <p className="text-white max-w-2xl mt-5 text-lg">
            At COMMUNIK, we believe design is the bridge between your brand and
            its audience, whether online or offline.
          </p>
        </div>

        
      </div>
      <div className="bg-white p-8 md:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  <Image
                    src="/service-logo-branding-2.webp"
                    alt="Geometric pattern representing brand identity"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                 
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Brand Identity & Logo Design
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  At COMMUNIK, we specialize in crafting distinctive logos and
                  cohesive brand identities that capture the essence of who you
                  are and resonate with your audience. We start with a deep dive
                  into your brand&apos;s mission, values, and market position to
                  understand what makes you unique. This strategic foundation
                  guides our creative process, ensuring that every design
                  element aligns with your brand&apos;s story and vision.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Your logo is often the first impression of your brand, and we
                  make sure it&apos;s a powerful one. Our logo designs are
                  custom-crafted to reflect your brand&apos;s personality, whether
                  bold and modern, elegant and refined, or playful and
                  approachable.
                </p>
                <p className="text-lg text-gray-700">
                  We focus on creating timeless logos that are versatile,
                  scalable, and instantly recognizable across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
