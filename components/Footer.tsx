import { ArrowBigRight, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#183EC2] text-white pt-16 pb-3">
      <div className=" max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Communik Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-center md:text-left">
              Let&apos;s Create Together. COMMUNIK is more than a design agency, we&apos;re your creative partner.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-yellow-400">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about-us" className="text-sm hover:text-yellow-400">About Us</Link>
              <Link href="/our-portfolio" className="text-sm hover:text-yellow-400">Our Portfolio</Link>
              <Link href="/contact-us" className="text-sm hover:text-yellow-400">Contact Us</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-yellow-400">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/logo-brand-packaging-design" className="text-sm hover:text-yellow-400">Logo, Brand, Packaging Design</Link>
              <Link href="/digital-print-design" className="text-sm hover:text-yellow-400">Digital and Print Design</Link>
              <Link href="/retail-office-branding" className="text-sm hover:text-yellow-400">Retail, Office Space Branding</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-yellow-400">Subscribe</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 w-full text-black"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 px-4 py-2"
                aria-label="Subscribe"
              >
                <ArrowBigRight fill="#183EC2"/>
              </button>
            </form>
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/social-insta.svg"  alt="Instagram" width={30} height={30} />
                
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/social-linkedin.svg" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>Copyright © 2024. Communik. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}