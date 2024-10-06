import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Image from "next/image";
import React from "react";


const projects = [
  { src: "/projects/2.webp", alt: "Project 1" },
  { src: "/projects/3.webp", alt: "Project 2" },
  { src: "/projects/4.webp", alt: "Project 3" },
  { src: "/projects/5.webp", alt: "Project 4" },
  { src: "/projects/6.webp", alt: "Project 5" },
  { src: "/projects/7.webp", alt: "Project 6" },
  { src: "/projects/8.webp", alt: "Project 7" },
  { src: "/projects/9.webp", alt: "Project 8" },
  { src: "/projects/10.webp", alt: "Project 9" },
  { src: "/projects/11.webp", alt: "Project 10" },
  { src: "/projects/12.webp", alt: "Project 11" },
  { src: "/projects/13.webp", alt: "Project 12" },
  { src: "/projects/14.webp", alt: "Project 13" },
  { src: "/projects/15.webp", alt: "Project 14" },
  { src: "/projects/16.webp", alt: "Project 15" },
  { src: "/projects/17.webp", alt: "Project 16" },
  { src: "/projects/18.webp", alt: "Project 17" },
  { src: "/projects/19.webp", alt: "Project 18" },
  { src: "/projects/20.webp", alt: "Project 19" },
  { src: "/projects/21.webp", alt: "Project 20" },
  { src: "/projects/111.webp", alt: "Project 21" },
];

const page = () => {
  return (
    <div className="">
      <div className="pt-40 relative px-2 pb-10 bg-blue-700">
      <Image
        src="/bg/footer-bg.webp"
        width={3000}
        height={3000}
        alt=""
        className=" object-cover inset-0  absolute w-full h-full "
      />
        <div className="max-w-6xl relative z-10 mx-auto text-center">
          <h1 className=" text-4xl  sm:text-6xl text-white drop-shadow-xl font-bold">
            Our Portfolio
          </h1>
          <p className="text-white  max-w-xl mx-auto mt-5 text-lg">
            At COMMUNIK, we believe design is the bridge between your brand and
            its audience, whether online or offline.
          </p>
        </div>
      </div>
      <Projects projects={projects}/>
      <Clients />
      <CallToAction />
    </div>
  );
};

export default page;
