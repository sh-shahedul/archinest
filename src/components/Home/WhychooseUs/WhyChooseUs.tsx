"use client";

import React from "react";

const images = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
  "https://i.pinimg.com/736x/df/94/9f/df949fcc0928f4165a0b09cfffa21e62.jpg",
  "https://i.pinimg.com/736x/18/0d/70/180d70d2abd5204d37ba0c29cf9bf643.jpg",
  "https://i.pinimg.com/736x/83/66/c0/8366c0504f1bfa86ff6e6ecce09a9632.jpg",
];

const WhyChooseUs = () => (
  <section className="max-w-screen-2xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 md:gap-40 gap-12 items-center">
    {/* Left: Image Grid */}
    <div className="grid grid-cols-2 gap-6">
      {images.map((src, idx) => (
        <div key={idx} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <img
            src={src}
            alt={`Why Choose Us ${idx + 1}`}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>

    {/* Right: Text Content */}
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Why <span className="text-orange-500">Choose Us</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
      </p>

      <ul className="space-y-3 text-gray-700 text-base">
        <li>✅ Proven track record of success</li>
        <li>✅ Trusted by global clients</li>
        <li>✅ Innovative and secure solutions</li>
        <li>✅ Dedicated support and collaboration</li>
      </ul>

      <button className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
        Explore More
      </button>
    </div>
  </section>
);

export default WhyChooseUs;