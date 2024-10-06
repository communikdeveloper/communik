"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const controls = useAnimation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ color: "#000" });
      } else {
        controls.start({ color: "#fff" });
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
    <header className="fixed w-full z-50 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your projects
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Let&apos;s Create Together.</p>
          <ArrowRight className="h-4 w-4 inline-flex hover:translate-x-2 transition duration-500 justify-center items-center" />
        </div>
      </div>
      <div className="max-w-7xl py-5 px-4 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </Link>

        <nav className="hidden md:flex gap-x-6 items-center">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <div 
                  className="relative inline-block"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <motion.div
                    animate={controls}
                    className="hover:text-yellow-500 flex items-center gap-3 group text-white font-semibold scroll cursor-pointer"
                  >
                    {link.name}
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: isServicesOpen ? 1 : 0,
                      y: isServicesOpen ? 0 : -10,
                      display: isServicesOpen ? "block" : "none"
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg"
                  >
                    {link.dropdown.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  animate={controls}
                  className="hover:text-yellow-500 text-white font-semibold scroll"
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <Link 
          className="hidden md:flex py-2 px-3 rounded-lg items-center justify-center text-white bg-green-500 hover:bg-green-600 transition duration-300"
          href="https://api.whatsapp.com/send?phone=+918860341444&text=Hello"
        >
          <Image src="/whatsapp.png" width={24} height={24} alt="WhatsApp icon" className="mr-3"/>
          <span>Chat with us</span>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween" }}
        className=" fixed top-0 h-screen right-0 bottom-0 w-64 bg-white shadow-lg z-50 md:hidden"
      >
        <div className="p-4">
          <button
            className="mb-4 text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.dropdown ? (
                  <div>
                    <button
                      className="text-gray-800 font-semibold w-full text-left"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 inline-block ml-2" />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 mt-2">
                        {link.dropdown.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.href}
                            className="block py-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-800 font-semibold hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <Link 
            className="mt-6 py-2 px-3 flex rounded-lg items-center justify-center text-white bg-green-500 hover:bg-green-600 transition duration-300"
            href="https://api.whatsapp.com/send?phone=+918860341444&text=Hello"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image src="/whatsapp.png" width={24} height={24} alt="WhatsApp icon" className="mr-3"/>
            <span>Chat with us</span>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;