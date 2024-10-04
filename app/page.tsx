import Clients from "@/components/Clients";
import { ContactFormComponent } from "@/components/contact-form";
import { GlobeDemo } from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Clients />
      <Services/>
      <Projects />
      <GlobeDemo/>
      <ContactFormComponent />
    </div>
  );
}
