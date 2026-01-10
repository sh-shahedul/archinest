"use client";

import React from "react";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Adobe", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UoxZj0CuFNbu7MpLsxbSrOmDiNq2sH2n7Q&s" },
  { name: "Intel", logo: "https://www.techcentral.ie/wp-content/uploads/2014/02/Intel_logo_web.jpg" },
  { name: "Samsung", logo: "https://www.hatchwise.com/wp-content/uploads/2022/10/PngItem_24638.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1587px-Tesla_Motors.svg.png" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
];

const Sponsor = () => {
  return (
    <section className=" overflow-hidden  max-w-screen-2xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Trusted by <span className="text-orange-500">Leading Companies</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-screen-2xl mx-auto">
          We’re proud to be supported by industry leaders who believe in our vision and innovation.
        </p>
      </div>
     

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              {/* dfdsfsdf */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;