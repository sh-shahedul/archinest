"use client";

import React from "react";

const steps = [
  {
    title: "Browse Architects",
    desc: "Clients explore architect profiles, portfolios, and available services tailored to their project needs.",
    image: "https://i.pinimg.com/1200x/d0/f7/e8/d0f7e8f9fec1a11ed4a35ec9072804ed.jpg",
  },
  {
    title: "Book & Pay Securely",
    desc: "Clients select a service, complete the booking, and make secure payments via Stripe or SSLCommerz.",
    image: "https://i.pinimg.com/1200x/95/39/a7/9539a75cae6999cbd219029ff0ab939f.jpg",
  },
  {
    title: "Project Execution",
    desc: "Architects manage bookings, collaborate with clients, and upload design files through their dashboard.",
    image: "https://i.pinimg.com/736x/10/38/90/1038902287443cece8bd4bba5637f9df.jpg",
  },
  {
    title: "Final Delivery & Review",
    desc: "Clients receive final design files, review the work, and complete the project with feedback.",
    image: "https://i.pinimg.com/736x/10/9e/e3/109ee385971d50218b28256a0073873c.jpg",
  },
];

const HowItWorks = () => (
  <section className="max-w-screen-2xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left: Text Content */}
    <div className="space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        How <span className="text-orange-500">It Works</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
        ArchiConnect streamlines the architecture service workflow — from discovery to delivery — with secure booking, role-based dashboards, and seamless collaboration.
      </p>

      <ul className="space-y-4 text-gray-700 text-base">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-orange-500 font-bold">{idx + 1}.</span>
            <div>
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
        Explore More
      </button>
    </div>

    {/* Right: Image Grid */}
    <div className="grid grid-cols-2 gap-6">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;