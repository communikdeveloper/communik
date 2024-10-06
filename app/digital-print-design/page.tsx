import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="pt-40 pb-10 relative bg-blue-700 px-2">
        <Image
          src="/bg/bg1.png"
          width={3000}
          height={3000}
          alt=""
          className=" object-cover inset-0  absolute w-full h-full "
        />

        <div className="max-w-6xl relative mx-auto">
          <h1 className=" text-4xl max-w-2xl sm:text-6xl text-white drop-shadow-xl font-bold">
            Digital and Print{" "}
            <span className="text-yellow-400">Design Solutions</span>
          </h1>
          <p className="text-white max-w-2xl mt-5 text-lg">
            At COMMUNIK, we believe design is the bridge between your brand and
            its audience, whether online or offline. Our digital and print
            design solutions are crafted to tell your brand&apos;s story with
            clarity and creativity, helping you connect with customers across
            all channels. From eye-catching digital experiences to impactful
            print materials, we ensure your brand&apos;s message is communicated
            beautifully and effectively.
          </p>
        </div>
      </div>
      <div className="bg-white p-3 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Digital Design Solutions Section */}
          <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Digital Design Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                In today&apos;s digital-first world, your online presence is
                often your brand&apos;s most visible touchpoint. We design
                digital experiences that not only look stunning but also engage
                and convert. Our digital design services include - Website
                Design and Development, We create visually appealing,
                user-friendly websites that reflect your brand&apos;s personality and
                meet your business goals.
              </p>
              <p className="text-lg text-gray-700">
                Our designs are optimized for performance, ensuring seamless
                navigation and responsive layouts across all devices-approach.
                We ensure your brand looks cohesive and compelling across all
                mediums, creating a seamless experience for your audience no
                matter where they encounter your brand.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image
                  src="/digital-design-solutions.png"
                  alt="Digital design illustration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </section>

          {/* Packaging Design Solutions Section */}
          <section className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Packaging Design Solutions
              </h2>
              <p className="text-lg text-gray-700">
                Product packaging is more than just a means of protecting and
                delivering a product; it&apos;s a crucial touch point in a customer&apos;s
                journey, shaping perceptions and experiences with the brand. A
                well thought out packaging design solution can significantly
                influence consumer purchasing behaviour, brand recognition and
                product differentiation in a competitive market.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video w-full max-w-lg mx-auto">
                <Image
                  src="/package-design-solution.png"
                  alt="Packaging design illustration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
