"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const projects = [
  { src: "/project1.webp", alt: "Project 1" },
  { src: "/project2.webp", alt: "Project 2" },
  { src: "/project3.webp", alt: "Project 3" },
  { src: "/project4.webp", alt: "Project 4" },
  { src: "/project5.webp", alt: "Project 5" },
  { src: "/project6.webp", alt: "Project 6" },
];

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section className="bg-gradient-to-b py-20 relative from-blue-700 via-indigo-500 to-white">
      <motion.img
        src="/pyramid.png"
        alt="star"
        height={248}
        width={248}
        style={{
          translateY: translateY,
        }}
        className="absolute top-24 left-3 hidden md:block"
      />
      <motion.img
        src="/spring.png"
        alt="star"
        height={248}
        width={248}
        style={{
          translateY: translateY,
        }}
        className="absolute bottom-24 right-3 hidden md:block"
      />
      <div className="max-w-7xl mx-auto px-3">
        <h2 className=" text-4xl sm:text-6xl text-white drop-shadow-md text-center font-bold">
          Portfolio
        </h2>
        <p className="text-3xl sm:text-5xl text-center font-semibold mt-3 text-yellow-400">
          Our previous works
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {projects.map((project, index) => (
            <Image
              key={index}
              src={project.src}
              alt={project.alt}
              width={400}
              height={400}
              className="transition-transform  duration-500 group-hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
