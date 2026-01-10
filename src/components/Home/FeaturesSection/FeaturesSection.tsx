"use client";

import React from "react";

const features = [
  {
    title: "Desktop & Mobile Version",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
  },
  {
    title: "Drag & Drop Builder",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
  },
  {
    title: "Awesome Modern Design",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
  },
  {
    title: "Awesome Modern Design",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
  },
];

interface FeatureProps {
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, desc }) => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-4 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
    <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-46 items-start">
        {/* Left: Heading + Description + Features */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Features you will <br />
              <span className="text-orange-500">love & enjoy</span>
            </h2>
            <p className="text-gray-600 max-w-lg text-base lg:text-lg leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even.
            </p>
          </div>

          <div className="mt-4 space-y-4">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} title={feature.title} desc={feature.desc} />
            ))}
          </div>
        </div>

        {/* Right: Image + Experience Badge */}
        <div className="relative">
          {/* Image Container - Made taller */}
          <div className="relative w-full h-[650px] lg:h-[780px] rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="https://i.pinimg.com/736x/00/74/ba/0074bac2f9616d9344d0b4e97a5690aa.jpg"
              alt="Professional"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1551836026-d5c2c0b44b5d?w=800&auto=format&fit=crop";
              }}
            />
            
            {/* Overlay Gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Experience Badge - এখন Image-এর বাইরে, ডান পাশে */}
          {/* <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-5 lg:p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white z-10">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl lg:text-4xl font-bold block">10+ Year</span>
              <span className="text-base font-medium opacity-90">
                Experience
              </span>
            </div>
          </div> */}
            <div className="absolute -bottom-8 lg:-bottom-15 -left-5 lg:-left-10 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white z-10">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold block">10+ Year</span>
              <span className="text-xs sm:text-sm lg:text-base font-medium opacity-90">
                Experience
              </span>
            </div>
          </div>

          {/* Optional decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-10 opacity-50 hidden lg:block"></div>
          <div className="absolute -bottom-8 left-12 w-24 h-24 bg-blue-100 rounded-full -z-10 opacity-30 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;