"use client";

import { TService } from "@/types/servces";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Star, Clock, Check, MessageCircle, Heart, Share2, ArrowLeft, Zap, Users, Award, ShieldCheck, Headphones, CircleDollarSign } from "lucide-react";
import Link from "next/link";

const ServiceDetails = () => {
  const params = useParams();
  const serviceId = params.id;

  const [service, setService] = useState<TService | null>(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${serviceId}`);
        if (!res.ok) throw new Error("Service not found");
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (serviceId) fetchService();
  }, [serviceId]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
    </div>
  );

  if (!service) return <div className="text-center mt-20">Service not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Navigation & Header Area */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between mt-10">
          <Link href="/services" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex gap-4">
            <button onClick={() => setIsWishlisted(!isWishlisted)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT SIDE: Main Content (8 Columns) --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Hero Image Section */}
            <div className="relative group">
              <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-sm border border-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {service.isFeatured && (
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Zap className="w-3.5 h-3.5 fill-current" /> FEATURED
                </div>
              )}
            </div>

            {/* 2. Service Header Info */}
            <div>
              <span className="text-orange-600 font-bold tracking-wider text-sm uppercase">{service.category}</span>
              <h1 className="text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight">{service.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-900">{service.rating}</span>
                  <span>({service.totalReviews} Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{service.totalReviews}+ Clients Served</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* 3. Description Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
              <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed text-lg">
                {service.description || service.shortDescription}
              </div>
            </section>

            {/* 4. Features/Benefits Grid - filling the left gap */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">What you wll get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Professional Quality', desc: 'Expertly handled by top-tier professionals', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { title: 'Secure Service', desc: 'Verified and safe process for your peace of mind', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50' },
                  { title: 'Support', desc: '24/7 dedicated customer support', icon: Headphones, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { title: 'Refund Policy', desc: 'Money-back guarantee if not satisfied', icon: CircleDollarSign, color: 'text-orange-600', bg: 'bg-orange-50' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all">
                    <div className={`${item.bg} ${item.color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- RIGHT SIDE: Sticky Booking Sidebar (4 Columns) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Booking Card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <div className="mb-6">
                  <p className="text-gray-500 text-sm font-medium mb-1">Starting from</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-gray-900">৳{service.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
                    Book Now
                  </button>
                  <button className="w-full border-2 border-gray-200 hover:border-orange-600 hover:text-orange-600 text-gray-700 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Contact Provider
                  </button>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Free cancellation up to 24h</span>
                  </div>
                </div>
              </div>

              {/* Architect/Provider Profile */}
              {service.architectId && (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Provider Info</h3>
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3">
                      <img
                        src={service.architectAvatar}
                        alt={service.architectName}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-orange-50 shadow-md"
                      />
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">{service.architectName}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                      <Award className="w-3.5 h-3.5 text-amber-500" /> {service.architectExperience} Years Experience
                    </p>
                    <button className="text-orange-600 font-bold text-sm hover:underline">View Full Profile</button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;