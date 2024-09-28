import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
       <Hero/>
       <Clients/>
       <Testimonials/>

       <VelocityScroll
      text="Growth based services"
      default_velocity={3}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-black to-blue-900 drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />

    </div>
  );
}
