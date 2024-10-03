import Clients from "@/components/Clients";
import { ContactFormComponent } from "@/components/contact-form";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Clients />
      
      <Testimonials />
       <ContactFormComponent/>
    </div>
  );
}
