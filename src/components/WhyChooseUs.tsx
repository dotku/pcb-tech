import React from 'react';
import { Factory, Award } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Industry-Leading Technology</h2>
            <p className="mt-4 text-lg text-gray-600">
              With over 10 years of experience in PCB manufacturing, we deliver:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <Factory className="h-6 w-6 text-blue-600 mr-2" />
                <span>State-of-the-art manufacturing facilities</span>
              </li>
              <li className="flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span>ISO 9001:2015 certified quality management</span>
              </li>
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="mt-1 text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="mt-1 text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;