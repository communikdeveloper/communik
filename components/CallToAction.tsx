"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className=" bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Let&apos;s Create Together.</h2>
          <p className="section-desc mt-5">
            COMMUNIK is more than a design agency, we&apos;re your creative
            partner.
          </p>

          <motion.img
            src="/tube.png"
            width={260}
            alt="star image"
            style={{
              translateY: translateY,
            }}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            src="star.png"
            style={{
              translateY: translateY,
            }}
            width={260}
            alt="star image"
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>

        <div className="flex gap-2 items-center mt-[30px] justify-center">
          <button className=" bg-black px-3 py-2 rounded-md text-white">Book a Call</button>
        </div>
      </div>
    </section>
  );
};
