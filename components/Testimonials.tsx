import React from "react";
import Globe from "@/components/ui/globe";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Founder -URBAN OASISES",
    username: "Dan Brown",
    body: "COMMUNIK exceeded our expectations with their retail branding solutions. They reimagined our store layout and signage, creating an inviting and visually cohesive environment that perfectly reflects our brand's style. The new design has significantly enhanced our customer experience and increased foot traffic. Their attention to detail and creative expertise made all the difference. Highly recommend!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "CEO - 2F ARCHITECTURE",
    username: "Emme Winston",
    body: "Working with COMMUNIK has been a game-changer for our brand. Their team took the time to understand our vision and transformed it into a striking logo and brand identity that truly represents who we are. Our new branding has not only elevated our market presence but also boosted team morale. The process was smooth, collaborative, and, most importantly, results-driven. We couldn’t be happier with the outcome.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Marketing Director -KALAH",
    username: "Heena Patel",
    body: "We partnered with COMMUNIK for our packaging redesign, and the results were outstanding. Their innovative approach and commitment to sustainable design helped us create packaging that is both visually appealing and eco-friendly. The new packaging has received rave reviews from our customers and has set us apart in a competitive market.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "ARTPRENEUR -MYON ARTS",
    username: "Vaishali",
    body: "We used the services of COMMUNIK to design our logo and company branding and found them to be extremely professional, creative and knowledgeable. The team has been impressive, very prompt in responding and delivering exceptional results. Highly recommend!!",
    img: "https://avatar.vercel.sh/jane",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative  w-96 h-72 cursor-pointer  overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-slate-100"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-left text-wrap text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
   <section className=" bg-gradient-to-r from-white to-fuchsia-300">
    <div className="  grid  grid-cols-1 sm:grid-cols-2  gap-5  max-w-6xl  mx-auto h-full ">
      <div className=" rounded-xl px-5 py-10">
        <div className="tag text-black border-black">Happy Clients</div>
        <h2 className="text-4xl md:text-6xl font-bold  text-transparent bg-clip-text bg-gradient-to-b from-black to-blue-900  mt-5">
          What our clients say
        </h2>
        <p className="mt-3 text-lg">
          Let&apos;s Create Together. COMMUNIK is more than a design agency,
          we&apos;re your creative partner.
        </p>

        <Marquee pauseOnHover className="[--duration:20s] z-20 mt-10">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="relative  h-[25rem] sm:h-full    rounded-xl">
        <Globe className="max-w-[640px] -top-10 absolute    mx-auto w-full h-full" />
      </div>
    </div>
   </section>
    
  );
};

export default Testimonials;
