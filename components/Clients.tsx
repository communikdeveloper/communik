import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
   
    img: "/amazon.png",
  },
  {
   
    img: "/anand-automotive.png",
  },
  {
   
    img: "/anand-automotive2x.png",
  },
  {
   
    img: "/canva.png",
  },
  {
   
    img: "/google.png",
  },
  {
   
    img: "/govind.png",
  },
  {
   
    img: "/havmor.png",
  },
  
];



const ReviewCard = ({
  img,
 
}: {
  img: string;
}) => {
  return (
    <div>
       <Image 
        src={img}
        alt="name"
        className=""
        width={100}
        height={100}
       />
    </div>
  );
};

const Clients = () => {
  return (
    <section className="flex  flex-col gap-5 sm:flex-row px-3 max-w-6xl pt-10  pb-10 mx-auto ">
      <div className=" max-w-2xl flex items-start  justify-center flex-col">
        <div className="tag text-black border-black items-center justify-center">
          Trusted By
        </div>
        <h2 className="text-4xl mt-2  text-neutral-700 font-semibold">
          Top Companies
        </h2>
      </div>

      <div className="relative  max-w-3xl mt-10  flex justify-center items-center  overflow-hidden w-full">
        <Marquee pauseOnHover className="[--duration:10s] z-20  ">
          {reviews.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
      </div>

    </section>
  );
};

export default Clients;
