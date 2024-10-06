import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Image from "next/image";
import React from "react";

import { Globe, Lightbulb, Handshake, Monitor } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Insight",
    description:
      "Our team's diverse backgrounds and worldwide reach bring a rich, multicultural perspective to every project.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description:
      "We're passionate about pushing the boundaries of design, using cutting-edge tools and trends to create standout work.",
  },
  {
    icon: Handshake,
    title: "Client-First Collaboration",
    description:
      "We work hand-in-hand with our clients, ensuring their vision is at the heart of everything we create.",
  },
  {
    icon: Monitor,
    title: "Sustainable Design",
    description:
      "Committed to eco-conscious practices, we aim to make design decisions that are not only visually compelling but also responsible.",
  },
];

const page = () => {
  return (
    <div className="">
      <div className=" py-32 sm:py-40  bg-blue-600 relative">
        <Image
          src="/bg/bg1.png"
          fill
          alt=""
          className=" object-cover inset-0  absolute w-full h-full "
        />

        <div className="max-w-6xl mx-auto text-center  relative">
          <h1 className=" text-4xl  sm:text-6xl text-white drop-shadow-xl font-bold">
            About Us
          </h1>
          <p className="text-yellow-400  mt-5 text-lg">
            Revolutionizing the Industry with creativity
          </p>
        </div>
      </div>

      <div className="bg-yellow-300">
        <div className="flex max-w-6xl py-20 mx-auto gap-8 px-2 flex-col sm:flex-row">
          <div className="w-full">
            <p className="text-lg leading-relaxed">
              Communik is a global design agency that bridges creativity and
              strategy to craft compelling brand experiences. We are a
              collective of designers, thinkers, and innovators dedicated to
              helping brands communicate their story with impact. From local
              startups to international enterprises, we partner with clients
              around the world to bring their visions to life. We believe design
              is more than aesthetics—it&apos;s a powerful tool for connection.
              Our mission is to turn ideas into transformative visuals that
              resonate deeply with audiences. By blending strategic thinking
              with creative excellence, we create designs that don&apos;t just
              capture attention—they inspire action.
            </p>
          </div>
          <div className="w-full  flex items-center justify-center">
            <Image
              src="/about/about.png"
              width={500}
              height={500}
              alt="aboutbg"
              className="ml-10 sm:ml-0"
            />
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-white to-fuchsia-200 flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-blue-700 font-semibold mb-4">About</h2>
          <h1 className="text-4xl font-bold mb-6">
            What We Do
            <span className="block w-24 h-1 bg-yellow-400 mt-2"></span>
          </h1>
          <p className="text-gray-900 mb-6">
            At COMMUNIK, we design with purpose. Our services span branding,
            graphic design, digital experiences, and environmental design,
            tailored to meet the unique needs of each client. Whether it&apos;s a
            fresh logo, a website that wows, or a brand identity that speaks
            volumes, we deliver design solutions that are innovative, impactful,
            and strategically aligned with your goals.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/about/about-wwd1.webp"
            alt="Team collaborating on a project"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="  bg-gradient-to-r from-white to-fuchsia-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-8">
            Why <span className="text-blue-600">COMMUNIK</span>?
            <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2"></span>
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-blue-800 shadow-xl rounded-xl  overflow-hidden"
                >
                  <div className="px-6 py-8">
                    <div className="flex flex-col text-center items-center">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-8 w-8 text-white" />
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
        </div>
      </div>

      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
