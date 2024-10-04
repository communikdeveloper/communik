import Image from "next/image"

export default function Services() {
  const services = [
    { title: "Logo Design", subtitle: "Brand Identity", image: "/branding-bg.webp" },
    { title: "Digital and", subtitle: "Print Design", image: "/website-design-bg.webp" },
    { title: "Retail Branding", subtitle: "Office Space Branding", image: "/office-space-bg.webp" },
  ]

  return (
    <div className="bg-gradient-to-br from-yellow-500 via-yellow-200 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto ">
       <h2 className="text-center text-4xl   bg-gradient-to-br text-transparent bg-clip-text from-black to-blue-800 font-bold">Our Services</h2>
       <p className="text-center mt-5 text-6xl font-semibold text-white drop-shadow-lg">Growth Based Services</p>  

       </div>
             
    </div>
  )
}