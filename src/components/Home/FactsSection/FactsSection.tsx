"use client";

import React from "react";
import { FaMedal, FaChartBar, FaBriefcase, FaEnvelope } from "react-icons/fa";

interface Stat {
  icon: JSX.Element;
  value: string;
  label: string;
  gradient: string;
}

const stats: Stat[] = [
  {
    icon: <FaMedal className="text-orange-500 text-4xl" />,
    value: "54",
    label: "Awards Winnings",
    gradient: "from-orange-100 to-orange-200",
  },
  {
    icon: <FaChartBar className="text-blue-500 text-4xl" />,
    value: "1458",
    label: "Project Finished",
    gradient: "from-blue-100 to-blue-200",
  },
  {
    icon: <FaBriefcase className="text-green-500 text-4xl" />,
    value: "590",
    label: "Clients Worked",
    gradient: "from-green-100 to-green-200",
  },
  {
    icon: <FaEnvelope className="text-purple-500 text-4xl" />,
    value: "22578",
    label: "Email Send",
    gradient: "from-purple-100 to-purple-200",
  },
];

const FactCard: React.FC<Stat> = ({ icon, value, label, gradient }) => (
  <div
    className={`relative bg-gradient-to-br ${gradient} rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition-all duration-500`}
  >
    {/* Decorative blur circle */}
    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/40 rounded-full blur-xl" />
    <div className="mb-4">{icon}</div>
    <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">{value}</h3>
    <p className="text-gray-700 text-lg font-medium mt-2">{label}</p>
  </div>
);

const FactsSection: React.FC = () => (
  <section className="relative mx-auto max-w-screen-2xl px-6 py-14">
    {/* Decorative background */}
    <div className="absolute top-0 left-0 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-40" />
    <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-40" />

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
        Some <span className="text-orange-500">Facts</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {stats.map((stat, idx) => (
        <FactCard key={idx} {...stat} />
      ))}
    </div>

    {/* Footer Line */}
    <div className="mt-16 text-center">
      <p className="text-sm text-gray-500 uppercase tracking-widest">
        Trusted by <span className="text-orange-500 font-semibold">Global Clients</span> • Powered by Relentless Engineering
      </p>
    </div>
  </section>
);

export default FactsSection;