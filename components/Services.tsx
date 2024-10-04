export default function Services() {
    return (
      <div className="bg-yellow-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-blue-600 text-3xl font-semibold text-center mb-4">Our Services</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Growth based services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logo Design", subtitle: "Brand Identity", image: "/branding-bg.webp" },
              { title: "Digital and", subtitle: "Print Design", image: "/website-design-bg.webp" },
              { title: "Retail Branding", subtitle: "Office Space Branding", image: "/office-space-bg.webp" },
            ].map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-75"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-3xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white text-xl">{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }