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

      <VelocityScroll
        text="Growth based services *"
        default_velocity={3}
        className="font-display text-center mb-2 drop-shadow-lg bg-blue-700 text-4xl font-bold tracking-[-0.02em]  text-yellow-400  md:text-7xl md:leading-[5rem]"
      />

      <Services />

      

      <Testimonials />
      <CallToAction />
    </div>
  );
}
