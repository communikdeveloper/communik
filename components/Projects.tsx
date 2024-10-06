"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

// Step 1: Define the Project interface
interface Project {
  src: string;
  alt: string;
}

// Step 2: Define the props interface for the Projects component
interface ProjectsProps {
  projects: Project[];
  isHomepage?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, isHomepage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={`bg-gradient-to-b  relative ${isHomepage?"py-20 from-blue-600 to-white":"py-4"}`}
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
        {isHomepage && (
          <div>
            <h2 className="text-4xl sm:text-6xl  text-white drop-shadow-md text-center font-bold">
              Portfolio
            </h2>
            <p className="text-3xl sm:text-5xl text-center font-semibold mt-3 text-yellow-300 ">
              Our previous works
            </p>
          </div>
        )}

        <div className={`flex flex-wrap justify-center gap-4  ${isHomepage?"mt-10":"mt-0"}`}>
          {projects.map((project, index) => (
            <Image
              key={index}
              src={project.src}
              alt={project.alt}
              width={400}
              height={400}
              className=" shadow-xl"
            />
          ))}
        </div>

        {isHomepage && (
          <Link className=" inline-flex items-center h-full w-full mt-5 justify-center" href="/our-portfolio">
            <Button>Explore More</Button>
          </Link>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
