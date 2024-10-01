import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" text-sm bg-black text-[#BCBCBC]  pt-10 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex  relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={"/logo.png"}
            alt="Sass Logo"
            height={150}
            width={150}
            className=" rounded-lg relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/about-us">About</a>
          <a href="/our-portfolio">Our Portfolio</a>
          <a href="/logo-brand-identity-design">Logo,Brand,Packaging Design</a>
          <a href="/digital-print-design">Digital and Print Design</a>
          <a href="/retail-office-branding">Retail and Space Branding</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Image
            src="/social-insta.svg"
            alt="Sass Logo"
            width={30}
            height={30}
            className=" rounded-lg  bg-white relative"
          />
          <Image
            src="/social-linkedin.svg"
            alt="Sass Logo"
            width={30}
            height={30}
            className=" rounded-lg bg-white relative"
          />
        </div>
        <p className="mt-6 pb-2">
          Copyright © 2024. Communik. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
