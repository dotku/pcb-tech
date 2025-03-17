import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Professional PCB Manufacturing & Assembly Solutions
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              High-quality, cost-effective PCB prototyping and production with quick turnaround times.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
                Start Your Project
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
              alt="PCB Manufacturing"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;