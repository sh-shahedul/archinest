// import React from 'react';
// import {serviceData} from "../../../../Data/serviceData"
// import { TService } from '@/types/servces';
// const Service = () => {
//     return (
//        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
//       {serviceData.map((service: TService) => (
//         // <div
//         //   key={service.id}
//         //   className="border rounded-lg p-4 shadow-sm"
//         // >
//         //   <img
//         //     src={service.image}
//         //     alt={service.title}
//         //     className="w-full h-40 object-cover rounded"
//         //   />

//         //   <h2 className="text-xl font-semibold mt-3">
//         //     {service.title}
//         //   </h2>

//         //   <p className="text-sm text-gray-500">
//         //     {service.shortDescription}
//         //   </p>

//         //   <p className="mt-2 font-medium">
//         //     Category: {service.category}
//         //   </p>

//         //   <p className="mt-1">
//         //     Price: ৳{service.price}
//         //   </p>

//         //   <p className="text-sm">
//         //     Duration: {service.duration}
//         //   </p>

//         //   <p className="text-sm">
//         //     ⭐ {service.rating} ({service.totalReviews} reviews)
//         //   </p>

//         //   {service.isFeatured && (
//         //     <span className="inline-block mt-3 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
//         //       Featured
//         //     </span>
//         //   )}
//         // </div>
//         <div
//   key={service.id}
//   className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
// >
//   {/* Featured badge */}
//   {service.isFeatured && (
//     <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
//       ✨ Featured
//     </div>
//   )}

//   {/* Image container */}
//   <div className="relative h-48 overflow-hidden bg-gray-200">
//     <img
//       src={service.image}
//       alt={service.title}
//       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//     />
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
//   </div>

//   {/* Content */}
//   <div className="p-5">
//     {/* Category */}
//     <div className="inline-block mb-3">
//       <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
//         {service.category}
//       </span>
//     </div>

//     {/* Title */}
//     <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//       {service.title}
//     </h2>

//     {/* Description */}
//     <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//       {service.shortDescription}
//     </p>

//     {/* Rating */}
//     <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
//       <div className="flex text-amber-400">
//         {'⭐'.repeat(Math.floor(service.rating))}
//       </div>
//       <span className="text-sm font-semibold text-gray-900">
//         {service.rating}
//       </span>
//       <span className="text-xs text-gray-500">
//         ({service.totalReviews})
//       </span>
//     </div>

//     {/* Details grid */}
//     <div className="grid grid-cols-2 gap-3 mb-4">
//       <div>
//         <p className="text-xs text-gray-500 font-medium mb-1">Duration</p>
//         <p className="text-sm font-semibold text-gray-900">{service.duration}</p>
//       </div>
//       <div>
//         <p className="text-xs text-gray-500 font-medium mb-1">Price</p>
//         <p className="text-lg font-bold text-blue-600">৳{service.price.toLocaleString()}</p>
//       </div>
//     </div>

//     {/* CTA Button */}
//     <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg transition-all duration-200 active:scale-95 shadow-md">
//       View Details
//     </button>
//   </div>
// </div>
//       ))}
//     </div>
//     );
// };

// export default Service;

import React from 'react';
import { serviceData } from "../../../../Data/serviceData"
import { TService } from '@/types/servces';

const Service = () => {
    return (
        <div className=" bg-gradient-to-br from-hero-bg via-hero-light to-hero-bg py-12 px-6">
    <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
         Design Your <span className=" text-[#FF900E]">Dream Space</span>
        </h1>
        <p className="max-w-2xl mx-auto font-medium">
          Explore our wide range of professional architectural solutions — from modern
          residential homes and stylish interiors to commercial buildings and landscape
          designs. Every service is crafted to bring your vision to life with precision and
          creativity.
        </p>
    </div>

  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
                {serviceData.map((service: TService) => (
                    <div
                        key={service.id}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-hero-border hover:border-hero-accent"
                    >
                        {/* Featured Badge */}
                        {service.isFeatured && (
                            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-400 to-hero-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                                ✨ Featured
                            </div>
                        )}

                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden bg-gray-200">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            {/* Category */}
                            <div className="inline-block mb-3">
                                <span className="text-xs font-bold text-[#FF900E] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                                    {service.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-hero-text mb-2 line-clamp-2 group-hover:text-hero-accent transition-colors duration-300">
                                {service.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-hero-gray mb-4 line-clamp-2">
                                {service.shortDescription}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-hero-border">
                                <div className="flex text-amber-400">
                                    {'⭐'.repeat(Math.floor(service.rating))}
                                </div>
                                <span className="text-sm font-semibold text-hero-text">
                                    {service.rating}
                                </span>
                                <span className="text-xs text-hero-gray">
                                    ({service.totalReviews})
                                </span>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <p className="text-xs text-hero-gray font-medium mb-1">Duration</p>
                                    <p className="text-sm font-semibold text-hero-text">{service.duration}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-hero-gray font-medium mb-1">Price</p>
                                    <p className="text-lg font-bold text-hero-accent">৳{service.price.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-[#FF900E] hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;