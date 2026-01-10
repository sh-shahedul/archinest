"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Connect with the Right Architect",
    highlight: "for Your Vision",
    desc: "Discover verified architects, book services, make secure payments, and receive digital design files digitally.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Smart Architecture",
    highlight: "Booking Platform",
    desc: "A centralized platform for architecture services with transparent booking, tracking, and delivery.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    title: "Design to Delivery",
    highlight: "All Digital",
    desc: "Track projects, communicate with architects, and receive final designs securely in one place.",
    image: "https://plus.unsplash.com/premium_photo-1661880164106-67db11a9f1b3",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-[#FFF4E7] text-[#131313]">
      {/* Soft glow */}
      {/* <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-orange-300/40 blur-3xl" /> */}

      <div className="relative mx-auto max-w-screen-2xl px-6 py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm text-[#FF900E]">
                Architecture • Booking • Delivery
              </span>

              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                {slide.title}
                <span className="block text-[#FF900E]">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-[#727272]">
                {slide.desc}
              </p>

              <div className="mt-8 flex gap-4">
                <button className="rounded-xl bg-[#FF900E] px-7 py-3 font-medium text-white hover:bg-orange-600 transition">
                  Find an Architect
                </button>
                <button className="rounded-xl border border-orange-300 px-7 py-3 font-medium text-[#131313] hover:bg-orange-100 transition">
                  Join as Architect
                </button>
              </div>

              {/* Dots */}
              <div className="mt-10 flex gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      current === idx
                        ? "bg-[#FF900E] scale-110"
                        : "bg-orange-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl border border-orange-200 bg-white p-6 shadow-xl">
                <img
                  src={slide.image}
                  alt="Architecture"
                  className="h-[440px] w-full rounded-2xl object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-[#FF900E] px-5 py-3 text-sm font-medium text-white shadow-xl"
              >
                Book • Track • Receive Designs
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
