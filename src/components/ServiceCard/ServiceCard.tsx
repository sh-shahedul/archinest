// import React from "react";
// import { TService } from "@/types/servces";
// import Link from "next/link";

// type Props = {
//   service: TService;
// };

// const ServiceCard = ({ service }: Props) => {
//   return (
//     <Link
//       href={`/services/${service.id}`}
//       className="group block relative overflow-hidden rounded-2xl shadow-lg border border-hero-border hover:shadow-2xl hover:border-hero-accent transition-all duration-500 transform hover:-translate-y-1"
//     >
//       {/* Featured Badge */}
//       {service.isFeatured && (
//         <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-hero-accent text-white px-3 py-1 rounded-full text-xs font-bold z-10">
//           ✨ Featured
//         </div>
//       )}

//       {/* Image */}
//       <div className="relative h-56 overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//         {/* Bottom Text Slide */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#FF900E]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg">
//           <span className="text-white font-bold text-center w-full block">
//             View Details
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <span className="text-xs font-bold text-[#FF900E] bg-blue-50 px-3 py-1 rounded-full">
//           {service.category}
//         </span>

//         <h2 className="text-xl font-bold mt-3 mb-2 line-clamp-2">
//           {service.title}
//         </h2>

//         <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//           {service.shortDescription}
//         </p>

//         <div className="flex items-center justify-between">
//           <span className="text-sm">{service.duration}</span>
//           <span className="text-lg font-bold text-[#FF900E]">
//             ৳{service.price.toLocaleString()}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ServiceCard;

import React from "react";
import { TService } from "@/types/servces";
import Link from "next/link";
import { Clock, CreditCard ,Tag } from "lucide-react"; // Lucide icons import

type Props = {
  service: TService;
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Link
      href={`/services/${service.id}`}
      className="group block relative overflow-hidden rounded-2xl shadow-lg border border-hero-border hover:shadow-2xl hover:border-hero-accent transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Featured Badge */}
      {service.isFeatured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-hero-accent text-white px-3 py-1 rounded-full text-xs font-bold z-10">
          ✨ Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Bottom Text Slide */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#FF900E]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-lg">
          <span className="text-white font-bold text-center w-full block">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
       <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF900E] bg-blue-50 px-3 py-1 rounded-full">
          <Tag className="w-3 h-3 text-[#FF900E]" />
          {service.category}
        </span>

        <h2 className="text-xl font-bold mt-3 mb-2 line-clamp-2 text-gray-800 group-hover:text-[#FF900E]">
          {service.title}
        </h2>

        <p className="text-sm font-semibold text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-900">
          {service.shortDescription}
        </p>

        <div className="flex items-center justify-between text-gray-700">
          <span className="flex items-center gap-1 text-sm font-semibold">
            <Clock className="w-4 h-4 text-[#FF900E]" />
            {service.duration}
          </span>
          <span className="flex items-center gap-1 text-lg font-bold text-[#FF900E]">
            <CreditCard className="w-4 h-4" />
            ৳{service.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
