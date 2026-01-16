"use client"
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import React, { useEffect, useState } from 'react';

import { TService } from '@/types/servces';

const Service = () => {
  const[services,setServices] = useState<TService[]>([]);
      const [loading,setLoading] = useState(true)
      useEffect(()=>{
          const fetchServices = async ()=>{
             try{
               const res = await fetch(`/api/services?featured=true&limit=8`)
              const data =await res.json()
              console.log(data);
              setServices(data)
             }catch(err){
                console.log(err);
             }finally{
              setLoading(false)
             }
          }
          fetchServices()
      },[])
  
      if(loading) return  <p className='flex justify-center items-center mt-20'>Loading Services.....</p>
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

  
           {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
        {services.map((service: TService) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
        </div>
    );
};

export default Service;