import Clients from "@/components/Clients";
import { ContactFormComponent } from "@/components/contact-form";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Clients />
      <Projects />
      <Testimonials />
      <ContactFormComponent />
    </div>
  );
}
