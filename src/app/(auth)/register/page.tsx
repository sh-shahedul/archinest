// import RegistrationForm from "@/components/form/RegisrationForm";
// import React from "react";
// import Image from "next/image";
// import registerImage from "../../../../public/regester.png"; 

// const RegisterPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left side - Registration Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
//         <div className="w-full max-w-md space-y-2">
//           <h1 className="text-2xl md:text-4xl font-bold text-center ">
//             Create Your <span className="text-orange-400">Account</span>
//           </h1>
//           <p className="md:text-base text-sm text-center text-muted-foreground">
//             Start your journey with ArchiNest
//           </p>

//           <RegistrationForm />

//         </div>
//       </div>

//       {/* Right side - Image */}
//       <div className="w-full md:w-1/2 relative h-64 md:h-auto flex justify-center items-center bg-orange-400">
//         <Image
//           src={registerImage}
//           alt="Registration"
          
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import RegistrationForm from "@/components/form/RegisrationForm";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import registerImage from "../../../../public/regester.png"; 

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-white relative">
        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors duration-200 font-semibold text-sm sm:text-base"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <div className="w-full max-w-md space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Create Your <span className="text-orange-400">Account</span>
          </h1>
          <p className="md:text-base text-sm text-center text-muted-foreground">
            Start your journey with ArchiNest
          </p>

          <RegistrationForm />
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto flex justify-center items-center bg-orange-400">
        <Image
          src={registerImage}
          alt="Registration"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterPage;