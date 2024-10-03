"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className=" py-40 px-2 bg-[radial-gradient(ellipse_200%_40%_at_bottom_right,#EAEEFE,#183EC2_100%)]
   overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-[580px]">
            <h1
              className=" text-5xl drop-shadow-lg md:text-6xl font-bold tracking-tighter
          text-white mt-6 "
            >
              #1 Worldwide{" "}
              <span className="text-yellow-500">Design Solution</span> Agency
            </h1>
            <p className="text-xl text-white tracking-tight mt-6">
              COMMUNIK stands as a leading global design solution agency, known
              for its unparalled creativity, strategic approach, and commitment
              to excellence. With a passion for transforming brands and spaces,
              COMMUNIK delivers innovative design solutions that resonate on a
              global scale.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="tel:1234567" className="btn btn-primary">
                <PhoneCallIcon className="mr-2" />
                <span>Book a Call</span>
              </Link>
            </div>

            <div className="flex gap-3 mt-6 w-full">
              <div className=" px-1  sm:px-3   backdrop-blur-2xl bg-white/10 border-y-white border-y text-center py-5 sm:py-10 rounded-md ">
                <h3 className="text-2xl sm:text-3xl  font-bold text-yellow-500">
                  100 +
                </h3>
                <p className="text-white text-sm sm:text-lg">
                  Projects Completed
                </p>
              </div>

              <div className="  px-1  sm:px-3  text-center backdrop-blur-2xl  border-y-white border-y  bg-white/10 py-5 sm:py-10 rounded-lg ">
                <h3 className="text-2xl sm:text-3xl  font-bold text-yellow-500">
                  20 +
                </h3>
                <p className="text-white text-sm sm:text-lg">
                  Years of Experience
                </p>
              </div>

              <div className=" px-1  sm:px-3 text-center backdrop-blur-2xl  border-y-white border-y  bg-white/10 py-5 sm:py-10 rounded-lg ">
                <h3 className="text-2xl sm:text-3xl  font-bold text-yellow-500">
                  50 +
                </h3>
                <p className="text-white  text-sm sm:text-lg">
                  Clients Worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-0  md:flex-1  relative">
            <Image
              className=" "
              src="/hero1.png"
              alt="globe"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
