import React from "react";
import Globe from "./ui/globe";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

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
        "relative w-64 mb-5 cursor-pointer overflow-hidden rounded-xl border p-4",
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
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const Clients = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center   overflow-hidden  ">
      <h2 className="text-4xl  text-transparent bg-gradient-to-b bg-clip-text from-black to-blue-900 font-bold">
        Testimonials
      </h2>
      <p className="text-3xl sm:text-5xl mb-10  text-neutral-800">What our clients say</p>
      <div className="relative grid-cols-1  grid sm:grid-cols-3 max-w-7xl gap-7 mx-auto  z-10 py-6">
        <div className="flex flex-col gap-2">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </div>
      </div>
      <Globe className="   absolute top-0 -z-10 mx-auto aspect-[1/1] w-full max-w-[600px]" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
};

export default Clients;
