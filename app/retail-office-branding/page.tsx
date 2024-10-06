import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Image from "next/image";
import React from "react";

const features = [
  {
    src: "/1598238-bfc0fe9f.png",
    title: "Environmental Graphics",
    description:
      "We design graphics and murals that reflect your brand’s essence and create a memorable atmosphere. These elements enhance the overall ambiance and contribute to a unique customer experience",
  },
  {
    src: "/17007206-56db59a3.png",
    title: "Thematic Design",
    description:
      "We develop thematic design concepts that align with your brand’s story and vision, creating environments that immerse customers in your brand narrative.",
  },
  {
    src: "/2086058-a52d7346.png",
    title: "Office Branding Solutions",
    description:
      "A well-branded office space not only boosts employee morale but also projects a strong brand image to visitors and clients.",
  },
];

const page = () => {
  return (
    <div className="">
      <div className="pt-40 pb-10 bg-blue-700 px-2 relative">
        <Image
          src="/bg/bg1.png"
          width={3000}
          height={3000}
          alt=""
          className=" object-cover inset-0  absolute w-full h-full "
        />

        <div className="max-w-6xl relative z-10 mx-auto">
          <h1 className=" text-4xl max-w-2xl sm:text-6xl text-white drop-shadow-xl font-bold">
            Retail/Office
            <span className="text-yellow-400"> Branding Design Solutions</span>
          </h1>
          <p className="text-white max-w-2xl mt-5 text-lg">
            At COMMUNIK, we believe design is the bridge between your brand and
            its audience, whether online or offline.
          </p>
        </div>
      </div>

      <div className=" relative h-[30rem] px-4 py-10">

        <div className="  relative  z-10    max-w-sm p-8 rounded-[4rem] text-white  bg-blue-800">
          <p className=" text-lg">
            Creating memorable experiences in physical spaces requires more than
            just design—it&apos;s about crafting environments that resonate with your
            brand&apos;s identity and engage your audience. We specialize in
            transforming retail spaces and other environments into immersive
            brand experiences that leave a lasting impression.
          </p>
        </div>
        <Image
          src="/retail-office-branding3.webp"
          width={1000}
          height={1000}
          alt=""
          className="h-full w-full  absolute  inset-0"
        />
      </div>

      <div className="mt-10">
        <div className="grid px-3 grid-cols-1 gap-8 max-w-5xl mx-auto sm:grid-cols-3 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-800 shadow-xl rounded-3xl  overflow-hidden"
            >
              <div className="px-6 py-8">
                <div className="flex flex-col text-center items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={feature.src}
                      width={1000}
                      height={1000}
                      alt=""
                      className="w-14 h-14 mb-2"
                    />
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-yellow-400">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-4 text-center text-base text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
