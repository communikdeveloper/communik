"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  { src: "/project1.webp", alt: "Project 1" },
  { src: "/project2.webp", alt: "Project 2" },
  { src: "/project3.webp", alt: "Project 3" },
  { src: "/project4.webp", alt: "Project 4" },
  { src: "/project5.webp", alt: "Project 5" },
  { src: "/project6.webp", alt: "Project 6" },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b py-20 relative from-blue-700 via-indigo-500 to-white"
    >
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        transition={{
          duration: 1,
        }}
        className="max-w-7xl mx-auto px-3"
      >
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
              className=""
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
