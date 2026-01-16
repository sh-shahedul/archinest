import LoginForm from '@/components/form/LoginForm';
import React from 'react';
import  loginImage  from "../../../public/regester.png"
import Image from 'next/image';
const page = () => {
    return (
       <div className='min-h-screen flex flex-col md:flex-row'>
        <div className="w-full md:w-1/2 relative h-64 md:h-auto flex justify-center items-center bg-orange-400">
        <Image
          src={loginImage}
          alt="Registration"
          
          className="object-cover"
        />
      </div>
        <div className='w-full md:w-1/2 flex items-center justify-center p-8 bg-white'>
        <LoginForm></LoginForm>
        </div>

       </div>
    );
};

export default page;