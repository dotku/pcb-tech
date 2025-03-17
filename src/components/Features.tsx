import React from 'react';
import { ShieldCheck, Truck, Clock, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Turnaround",
      description: "24-hour PCB prototype manufacturing and fast delivery worldwide"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Quality Guaranteed",
      description: "ISO 9001:2015 certified with rigorous quality control"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Competitive Pricing",
      description: "Best value for both prototype and volume production"
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Global Shipping",
      description: "Fast and reliable shipping to over 100 countries"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Industry-leading PCB solutions tailored to your needs
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;