'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


const Header = () => {
  const controls = useAnimation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       controls.start({ color: "#000" }); // Turn nav links black on scroll
  //     } else {
  //       controls.start({ color: "#fff" }); // Default color when not scrolled
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [controls]);
  return (
    <header className="fixed w-full  z-10 backdrop-blur-sm ">
         <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your project management</p>
        <div className="inline-flex  gap-1 items-center">
          <p>Get Started for free</p>
          {/* <ArrowRight className="h-4 w-4 inline-flex hover:translate-x-2 transition duration-500 justify-center items-center" /> */}
        </div>
      </div>
      <div className="max-w-7xl py-5 px-2 mx-auto flex justify-between items-center">
        <Image src="/logo.png" width={100} height={100} alt="logo" />

        <nav className="hidden md:flex gap-x-6 items-center">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              animate={controls}
              className="hover:text-yellow-500"
            >
              <Link href="/">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
