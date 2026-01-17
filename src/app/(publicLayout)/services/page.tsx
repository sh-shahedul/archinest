"use client"
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { TService } from '@/types/servces';
import React, { useEffect, useState } from 'react';

const Services = () => {
    const[services,setServices] = useState<TService[]>([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const fetchServices = async ()=>{
           try{
             const res = await fetch("/api/services")
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
       <div>
          <div className="text-center mb-12 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Professional <span className='text-orange-400'>Services</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of architectural, interior, and consultancy
          services designed to bring your ideas to life with quality, creativity,
          and professionalism.
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto mt-10 px-6">
        {services.map((service: TService) => (
            <ServiceCard key={service.id} service={service} />
        ))}
      </div> 
        </div>
      
    );
};

export default Services;