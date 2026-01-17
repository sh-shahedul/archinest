// import LoginForm from '@/components/form/LoginForm';
// import React from 'react';
// import  loginImage  from "../../../public/regester.png"
// import Image from 'next/image';
// const page = () => {
//     return (
//        <div className='min-h-screen flex flex-col md:flex-row'>
        
//         <div className="w-full md:w-1/2 relative h-64 md:h-auto flex justify-center items-center bg-orange-400">
//         <Image
//           src={loginImage}
//           alt="Registration"
          
//           className="object-cover"
//         />
//       </div>
//         <div className='w-full md:w-1/2 flex items-center justify-center p-8 bg-white'>
//         <LoginForm></LoginForm>
//         </div>

//        </div>
//     );
// };

// export default page;

import LoginForm from '@/components/form/LoginForm';
import React from 'react';
import loginImage from "../../../public/regester.png"
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
    return (
       <div className='min-h-screen flex flex-col md:flex-row'>
        
        <div className="w-full md:w-1/2 relative h-64 md:h-auto flex justify-center items-center bg-orange-400">
          <Image
            src={loginImage}
            alt="Registration"
            className="object-cover"
          />
        </div>

        <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 bg-white relative'>
          {/* Back to Home Button */}
          <Link 
            href="/" 
            className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors duration-200 font-semibold text-sm sm:text-base"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          <LoginForm></LoginForm>
        </div>

       </div>
    );
};

export default Login;