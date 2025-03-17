import React from 'react';

const Services = () => {
  const services = [
    {
      title: "PCB Prototyping",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
      description: "Quick-turn prototype PCB manufacturing with various material options"
    },
    {
      title: "PCB Assembly",
      image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?auto=format&fit=crop&w=800&q=80",
      description: "Professional PCBA services with automated and manual assembly options"
    },
    {
      title: "Volume Production",
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
      description: "High-volume PCB manufacturing with consistent quality"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive PCB solutions for every need
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;