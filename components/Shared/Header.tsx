"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {  ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

const Header = () => {
  const controls = useAnimation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ color: "#000" }); // Turn nav links black on scroll
      } else {
        controls.start({ color: "#fff" }); // Default color when not scrolled
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Logo & Brand Identity", href: "/logo-brand-identity-design" },
        { name: "Digital & Print Design", href: "/digital-print-design" },
        { name: "Retail & Office Branding", href: "/retail-office-branding" },
      ],
    },
    { name: "Portfolio", href: "/our-portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed w-full  z-50 backdrop-blur-sm ">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your projects
        </p>
        <div className="inline-flex  gap-1 items-center">
          <p>Let&apos;s Create Together.</p>

          <ArrowRight className="h-4 w-4 inline-flex hover:translate-x-2 transition duration-500 justify-center items-center" />
        </div>
      </div>
      <div className="max-w-7xl py-5 px-2 mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </Link>

        <nav className="hidden md:flex gap-x-6 items-center">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <div className="relative inline-block">
                  <motion.div
                    key={index}
                    animate={controls}
                    className="hover:text-yellow-500 flex items-center gap-3 group text-white font-semibold scroll cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" /> 
                  </motion.div>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <motion.div
                  key={index}
                  animate={controls}
                  className="hover:text-yellow-500 text-white font-semibold scroll"
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <Link className="py-2 px-3 flex rounded-lg items-center justify-center text-white  bg-green-500" href="">
        <Image src="/whatsapp.png" width={1000} height={1000} alt="icon"  className="  w-6 h-6 mr-3"/>
        Chat with us
        </Link>
      </div>
    </header>
  );
};

export default Header;
