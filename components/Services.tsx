import React from "react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Link from "next/link";


const services = [
  "Logo Design Brand Identity",
  "Digital and Print Design",
  "Retail Branding Office Space Branding",
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b py-20 from-blue-700 via-indigo-500 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-6xl text-white drop-shadow-md text-center font-bold">
        Our Services
        </h2>
        <p className="text-3xl sm:text-5xl text-center font-semibold mt-3 text-yellow-400">
          Let&apos;s Create Together.
        </p>

        <div className="grid grid-cols-1 px-3 sm:grid-cols-3  mt-14 mx-auto w-full gap-2">
          {services.map((service, index) => (
            <Link href="/" key={index}>
              <NeonGradientCard className="max-w-sm ">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  {service}
                </span>
              </NeonGradientCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
