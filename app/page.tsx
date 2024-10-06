import Clients from "@/components/Clients";
import { ContactFormComponent } from "@/components/contact-form";
import { GlobeDemo } from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import {Services} from "@/components/Services";

const projects = [
  { src: "/projects/2.webp", alt: "Project 1" },
  { src: "/projects/3.webp", alt: "Project 2" },
  { src: "/projects/4.webp", alt: "Project 3" },
  { src: "/projects/5.webp", alt: "Project 4" },
  { src: "/projects/6.webp", alt: "Project 5" },
  { src: "/projects/7.webp", alt: "Project 6" },
  { src: "/projects/8.webp", alt: "Project 7" },
  { src: "/projects/9.webp", alt: "Project 8" },
  { src: "/projects/111.webp", alt: "Project 21" },
];

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Clients />
      <Services/>
      <Projects projects={projects} isHomepage />
      <GlobeDemo/>
      <ContactFormComponent isHomepage />
    </div>
  );
}
