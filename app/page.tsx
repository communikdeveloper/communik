import { CallToAction } from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
